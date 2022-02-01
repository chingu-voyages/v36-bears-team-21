from django.db import models

# Create your models here.
class Backend(models.Model):
    username = models.CharField(max_length=20)
    email = models.CharField(max_length=30, )
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
