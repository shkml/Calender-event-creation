from django.shortcuts import render, redirect
from django.contrib import messages
from .models import eventForm

def home(request):
    return render(request, 'comp41110/home.html')

def createEvent(request):
    if request.method=="POST":
        eventName = request.POST['eventName']
        eventDate = request.POST['eventDate']
        eventStartTime = request.POST['eventStartTime']
        eventEndTime = request.POST['eventEndTime']
        eventNotes = request.POST['eventNotes']

        ins = eventForm(eventName=eventName, eventDate=eventDate, eventStartTime=eventStartTime, eventEndTime= eventEndTime, eventNotes=eventNotes)
        ins.save()
        messages.success(request, "Event has been added successfully! Check in Fetch events section.")
    return render(request, 'comp41110/eventForm.html')

def fetchEvents(request):
    allEvents = eventForm.objects.all()
    context = {
        'Events':allEvents
    }
    if len(allEvents) == 0:
        string = str(len(allEvents)) +' records is present as of now. Please create an event.'
    else:
        string  = str(len(allEvents)) + ' records are present as of now. Please find below details.'

    messages.success(request, string)
    return render(request, 'comp41110/fetchEvent.html', context)

def deleteEvent(request, pk):
    event = eventForm.objects.get(eventId=pk)
    if request.method == "POST":
        event.delete()
        return redirect('/')

    context = {'Events': event}
    return render(request, 'comp41110/deleteEvent.html', context)