web: gunicorn pocketLaw_back_end.wsgi --log-file -
worker: celery worker -A pocketLaw_back_end.celery --loglevel=info
