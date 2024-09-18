from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User, TaskList
from .serializers import UserSerializer
from django.db import transaction

# view is used to handle API request and response.
# api_view is a decorator provided by DJango rest framework (DRF) for handling API view functions.
# decorators are used to modify or extent the behavior of the function that they accept as a parameter.

# @api_view is a decorator which states that the check_or_create_user method will response to POST method.
@api_view(['POST'])
def check_or_create_user(request):
    clerk_id = request.data.get('clerk_id')
    username = request.data.get('username')
    email = request.data.get('email')

    if not clerk_id or not username or not email:
        return Response({'error': 'clerk_id, name, and email are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # transaction.atomic() is used to ensure that set of db operations are executed as a single unit.
        # here everything inside the with block is either executed completed are reverted if an error occurs at any point
        # atomicity means set of operations - either all succeed or none is applied
        with transaction.atomic():
            user, new_user_created = User.objects.get_or_create(clerk_id = clerk_id, defaults = {
                'username' : username,
                'email' : email,
                'clerk_id' : clerk_id
            })

            if (new_user_created):
                # If a new user is created, it is important to create another record in task list relation with default values
                task_list_created  = TaskList.objects.create(user = user)

                if (task_list_created):
                    return Response(UserSerializer(user).data, status = status.HTTP_200_OK)
                else:
                    # if a user was created but task list was not created then the user should be deleted
                    user.delete()
                    return Response({'error' : 'Failed to create task list for new user'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
                # New user was not created
                return Response(UserSerializer(user).data, status = status.HTTP_200_OK)

    except Exception as err:
        return Response({'error' : str(err)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    
@api_view(['POST'])
def task_dashboard(request):
    clerk_id = request.body.get('clerk_id')

    if not clerk_id:
        return Response({'error' : 'clerk_id is required'}, status = status.HTTP_400_BAD_REQUEST)
