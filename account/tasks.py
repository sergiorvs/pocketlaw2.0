"""
Celery Tasks
"""
import random

from celery import shared_task
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from account.messages.mail_subjects import (
    CONFIRM_EMAIL,
    ACCOUNT_ACTIVATED,
    RESTORE_PASSWORD_REQUEST,
    PASSWORD_CHANGED
)
from account.models import (
    User,
    TokenAux,
)
from core.mailing import send_mail
from core.tokens import account_activation_token, reset_password_token
from core.utils import (
    get_model_by_id,
)
from pocketLaw_back_end import settings


@shared_task
def sign_up_email_confirmation(**kwargs):
    """
    Send email from html file
    """
    user_id = kwargs.get('user_id')
    email = kwargs.get('email')
    domain = kwargs.get('domain')

    user = get_model_by_id(User, user_id)
    uid = urlsafe_base64_encode(force_bytes(user.pk))

    # Token for mail
    num = random.randint(1, 101)
    token_seed = TokenAux(user=user, counter=num)
    token_seed.save()
    token = account_activation_token.make_token(user)

    link = f'{domain}activate/account/{uid}/{token}'

    # Sending email
    mail_data = {
        'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),
        'to_email': email,
        'subject': CONFIRM_EMAIL,
        'email_template_name': 'email/account/register_successfully.html',
        'html_email_template_name': 'email/account/register_successfully.html',
        'context': {
            'user': user,
            'link': link,
        },
    }

    send_mail(**mail_data)


@shared_task
def send_success_confirmation_email(**kwargs):
    """
    Send email when account is activated
    """
    email = kwargs.get('email')

    # Sending email
    mail_data = {
        'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),
        'to_email': email,
        'subject': ACCOUNT_ACTIVATED,
        'email_template_name': 'email/account/activate_account.html',
        'html_email_template_name': 'email/account/activate_account.html',
        'context': {},
    }

    send_mail(**mail_data)


@shared_task
def send_restore_password_link(**kwargs):
    """
    Send email when account is activated
    """
    email = kwargs.get('email')
    domain = kwargs.get('domain')
    user_id = kwargs.get('user_id')

    user = get_model_by_id(User, user_id)
    uid = urlsafe_base64_encode(force_bytes(user.pk))

    # Token for mail
    cont = random.randint(1, 101)
    tk, _ = TokenAux.objects.get_or_create(user=user)
    tk.counter = cont
    tk.save()

    link = f'{domain}reset/password/{uid}/{reset_password_token.make_token(user)}'

    # Sending email
    mail_data = {
        'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),
        'to_email': email,
        'subject': RESTORE_PASSWORD_REQUEST,
        'email_template_name': 'email/account/restore_password.html',
        'html_email_template_name': 'email/account/restore_password.html',
        'context': {
            'user': user,
            'link': link,
        },
    }

    send_mail(**mail_data)


@shared_task
def send_password_reset_successfull(**kwargs):
    email = kwargs.get('email')

    # Sending email
    mail_data = {
        'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),
        'to_email': email,
        'subject': PASSWORD_CHANGED,
        'email_template_name': 'email/account/succesfully_change_password.html',
        'html_email_template_name': 'email/account/succesfully_change_password.html',
        'context': {
        },
    }

    send_mail(**mail_data)

