from django.db import models
from datetime import time
from django.contrib.postgres.fields import ArrayField

#constants
CLERK_ID_FIELD = models.CharField(max_length=50, unique=True, null=False, blank=False)
from enum import Enum

class TASK_STATUS(Enum):
     SCHEDULED = 'SCHEDULED'
     ONGOING = 'ONGOING'
     CANCELLED = 'CANCELLED'
     COMPLETED = 'COMPLETED'
     
     # classmethod decorator defines a method to be a class method. Similar to static keywork in java
     # classmethods receive the class itself as an argument instead of self as self resembles an instance of the class.
     @classmethod
     def choices(cls):
        return [(tag.value, tag.name) for tag in cls]


class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    clerk_id = CLERK_ID_FIELD

    def __str__(self):
        return self.username
    
class Task(models.Model):
        task_id = models.UUIDField(blank=False, unique= True, editable=False)
        task_owner = models.ForeignKey(User, on_delete=models.CASCADE) # on_delete property tells Django to delete all the task objects if the related user_clerk_id object is deleted.
        task_assigned = CLERK_ID_FIELD
        start_date = models.DateField()
        end_date = models.DateField()
        start_time = models.TimeField(default=time(0,0,0),db_index=True) # sets the default start time to 0:0:0 am on the start_date
        end_time = models.TimeField(default=time(23, 59, 59),db_index=True) # sets the default end time to 11:59:59 pm on the end_date
        title = models.CharField(max_length=150)
        description = models.CharField(blank=True, default=None)
        action_points = ArrayField(models.CharField(), default=list)
        category = models.CharField(max_length=50)
        status = models.CharField(
        max_length=20,
        choices=TASK_STATUS.choices(),
        default=TASK_STATUS.SCHEDULED.value,
        db_index=True
        )
        is_self_assigned = models.BooleanField(default=True)
        is_critical = models.BooleanField(default=False,db_index=True)

class TaskList(models.Model):
     user = models.ForeignKey(User, on_delete=models.CASCADE)
     all_tasks = models.ManyToManyField(Task, related_name='all_tasks')

