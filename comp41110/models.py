from django.db import models
from django.utils import timezone

class eventForm(models.Model):
    eventId = models.AutoField(primary_key=True)
    eventName = models.TextField(max_length=60)
    eventDate = models.DateField()
    eventStartTime = models.TimeField()
    eventEndTime = models.TimeField()
    eventNotes = models.TextField(max_length=300)
    eventCreation = models.DateTimeField(default=timezone.now)



