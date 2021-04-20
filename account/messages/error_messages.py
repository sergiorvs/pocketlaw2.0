"""
Error messages for account
"""
from django.utils.translation import ugettext_lazy as _

EMAIL_ALREADY_EXIST = _('Este email ya existe')
TERMS_AND_CONDITIONS = _('Debes aceptar los términos y condiciones')
ACCOUNT_ALREADY_EXIST = _('Usuario con este email ya existe')
PASSWORDS_DOES_NOT_MATCH = _('Las contraseñas no coinciden!')
INVALID_TOKEN_ERROR = _('El link es inválido')

LAW_DOES_NOT_EXIST = _('No existe una ley con este id')
CANNOT_UPLOAD_IMAGE = _('El archivo que intentó subir no es una imágen')

EMAIL_ADDRESS_DOES_NOT_EXIST = _('El correo ingresado no existe!')
INCORRECT_PASSWORD = _('La contraseña no es correcta')
