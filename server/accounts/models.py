from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    phone_number = models.CharField(max_length=15, unique=True, null=True, blank=True)
    clerk_id = models.CharField(max_length=50, unique=True, null=True, blank=True)

    def __str__(self):
        return self.name
