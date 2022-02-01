from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.urls import reverse
from backend.forms import CustomUserCreationForm
from .forms import SignUpForm

# imported for test
from django.http import HttpResponse

# Create your views here.
def signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'signup.html', {'form':form})
def home(response):
    return HttpResponse("Hello world")

def dashboard(request):
    return render (request, 'users/dashboard.html')

def register(request):

    if request.method == "GET":
        return render(
            request,
            'users/register.html',
            {"form":CustomUserCreationForm}
        )
    elif request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        try:
            #user = form.save()
            user = form.save(commit=False)
            user.backend = "django.contrib.auth.backends.ModelBackend"
            user.save()
            login(request, user)
            return redirect(reverse('dashboard'))
        except Exception as e:
            return HttpResponse(e)

        # or
        # if form.is_valid():
        #     user = form.save()
        #     login(request, user)
        #     return redirect(reverse('dashboard'))
        # else:
        #     return HttpResponse("Here")
