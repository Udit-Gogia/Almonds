# serializers.py
from rest_framework import serializers
from .models import User

# ModelSerializer is a class provided by Django rest framework that automatically generates fields for a model based on its definition. 
# In the below code UserSerializer is inheriting the ModelSerializer class hence UserSerializer is a subClass of ModelSerializer.


# The UserSerializer class is responsible for converting User model instances into JSON format (serialization) and validating incoming JSON data to update or create User instances (deserialization).
class UserSerializer(serializers.ModelSerializer):
    # Meta is used to provide metadata to the serializer
    # metadata includes the model and the fields which needs to be included in the JSON response.
    class Meta:
        # with the help of model, Django knows which database and fields to work with
        model = User
        fields = ['username', 'email', 'clerk_id']
