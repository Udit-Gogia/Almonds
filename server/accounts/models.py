from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    clerk_id = models.CharField(max_length=50, unique=True, null=True, blank=True)

    def __str__(self):
        return self.username
