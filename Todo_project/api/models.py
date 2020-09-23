from django.db import models

# Create your models here.
class TodoGroup(models.Model):
    seq = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)