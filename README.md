# Calender-event-creation
This website enables a user to see the calender for year 2021, which can be configured from backend. User can create and delete the events as and when required. Below is a little description of how we can run this code.

In order to run this code, user is supposed to install below packages -
1. Create a virtual environment
- Installing the virtual environment- pip install virtualenv
- Creating the virtual environment - virtualenv <Virtual env name>
- Activating the virtual env using command - <Virtual env name>\Scripts\activate.bat
Here, ccProj is my virtual environment

2. Install below requirements
- asgiref==3.3.1

- Django==3.1.4

- crispy forms==1.10.0

- mysqlclient==2.0.2

- pytz==2020.5

- sqlparse==0.4.1

using pip install – the package as specified above. 

3. python manage.py migrate 

4. python manage.py makemigrations

5. python manage.py runserver 

And then you should be able to run the code locally.
