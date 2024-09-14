from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer

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

    # this function will return the user object and a boolean value that tells if the user was created for only data was retrieved
    user, created = User.objects.get_or_create(clerk_id = clerk_id, defaults = {
        'username' : username,
        'email' : email,
        'clerk_id' : clerk_id
    })

    if (created):
        return Response(UserSerializer(user).data, status = status.HTTP_201_CREATED)
    else:
        return Response(UserSerializer(user).data, status = status.HTTP_200_OK)

    
    
