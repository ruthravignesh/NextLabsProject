from rest_framework import serializers
from .models import User, App
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.contrib.auth.hashers import make_password


class AdminAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = App
        fields = ('id', 'name', 'points', 'complete')


class UserAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = App
        fields = '__all__'


class CreateAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = App
        fields = '__all__'
