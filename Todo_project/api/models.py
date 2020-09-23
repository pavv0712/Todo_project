from django.db import models

# Create your models here.
class TodoGroup(models.Model):
    seq = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    reg_date = models.DateField(auto_now_add=True)
    del_yn = models.BooleanField(default=False)

class Todo(models.Model):
    seq = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    status = models.CharField(max_length=10)
    reg_date = models.DateField(auto_now_add=True)
    end_date = models.DateField(blank=True)
    del_yn = models.BooleanField(default=False)
    group = models.ForeignKey(TodoGroup, on_delete=models.CASCADE)