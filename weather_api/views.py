from django.shortcuts import render
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import WeatherSerializer
from .models import Weather

class WeatherView(APIView):
    def get(self, request, city):
        API_KEY = '9afa4ab5da6ee8948c09326d035db06a'
        BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
        response = requests.get(BASE_URL, params={
            'q': city,
            'appid': API_KEY,
            'units': 'metric'
        })
        if response.status_code == 200:
            data = response.json()
            weather_data = {
                'city': city,
                'temperature': data['main']['temp'],
                'description': data['weather'][0]['description'],
                'icon': data['weather'][0]['icon']
            }
            serializer = WeatherSerializer(data=weather_data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response(serializer.errors, status=400)
        else:
            return Response(data={'error': 'Unable to fetch weather data'}, status=500)

