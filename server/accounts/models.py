from django.db import models

#constants
CLERK_ID_FIELD = models.CharField(max_length=50, unique=True, null=False, blank=False)

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    clerk_id = CLERK_ID_FIELD

    def __str__(self):
        return self.username
    