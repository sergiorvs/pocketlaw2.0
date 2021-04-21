"""
Account graphql query
"""
from graphene import (
    ObjectType,
    String,
)

from django.contrib.staticfiles.storage import staticfiles_storage


class Query(ObjectType):
    """
    Graphql Queries
    """
    privacy_politics = String()
    complaints_book = String()

    @staticmethod
    def resolve_privacy_politics(self, info):
        return staticfiles_storage.url("documents/privacity_politics.pdf")

    @staticmethod
    def resolve_complaints_book(self, info):
        return staticfiles_storage.url("documents/complaints_book.docx")
