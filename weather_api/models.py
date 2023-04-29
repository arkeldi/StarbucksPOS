from django.db import models

class Weather(models.Model):
    city = models.CharField(max_length=100)
    temperature = models.FloatField()
    description = models.CharField(max_length=200)
    icon = models.CharField(max_length=50)

