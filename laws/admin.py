from django.contrib import admin

# Register your models here.
from laws.models import (
    Law,
    Question,
    Tag,
)


class QuestionInLine(admin.TabularInline):
    model = Question
    extra = 1


@admin.register(Law)
class LawAdmin(admin.ModelAdmin):
    """
    Laws Admin
    """
    list_display = ('title', 'tag')
    inlines = [QuestionInLine, ]


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    """
    Tag Admin
    """
    pass

