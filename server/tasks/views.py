from django.shortcuts import render
from django.db import transaction
from datetime import date
from django.http import JsonResponse
from .models import User, TaskList, Task,TASK_STATUS
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['POST'])
def task_dashboard(request):
    clerk_id = request.data.get('clerk_id')

    if not clerk_id:
        return Response({'error' : 'clerk_id is required'}, status = status.HTTP_400_BAD_REQUEST)

    ongoing_task_count = Task.objects.filter(status=TASK_STATUS.ONGOING).count()
    scheduled_task_count = Task.objects.filter(status=TASK_STATUS.SCHEDULED).count()
    completed_task_count = Task.objects.filter(status=TASK_STATUS.COMPLETED).count()
    total_task_count = Task.objects.count()


    current_date = date.today().strftime("%Y-%m-%d")
    
    # when a field is followed by __lte, it means field >= ?. so __lt, __gt, __lte, __gte are used for range filters
    todays_tasks = Task.objects.filter(start_date__lte = current_date, end_date__gte = current_date)

    # the below statement is similar to [x for i in arr] where arr is a list, i is each iteration in arr and x is the returned value
    formated_task_list = [
    {
        "task_id" : task.task_id,
        "title": task.title,
        "description": task.description,
        "is_critical" : task.is_critical,
        "category": task.category,
        "status": task.status,
        "start_date": task.start_date,
        "end_date": task.end_date,
        "start_time" : task.start_time,
        "end_time" : task.end_time,

    }
    for task in todays_tasks
]
    
    # creating the response that has to be sent
    response_data = {
        "ongoing_task_count": ongoing_task_count,
        "completed_task_count": completed_task_count,
        "scheduled_task_count": scheduled_task_count,
        "total_task_count": total_task_count,
        "todays_task_list": formated_task_list,
    }

    #the response structure is then sent
    return JsonResponse(response_data)


@api_view(['POST'])
# API for task creation to be tested in postman. after completion dashboard api needs to be tested.
def create_task(request):
    clerk_id = request.data.get('clerk_id')
    task_data = request.data.get('task_data')

    if not clerk_id or not task_data:
         return Response({'error' : 'clerk_id and task_data are required'}, status = status.HTTP_400_BAD_REQUEST)
    
    