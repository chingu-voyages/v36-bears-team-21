from django.conf.urls import include, url
from backend.views import dashboard

urlpatterns = [
    url(r'^', dashboard, name='dashboard'),
]
