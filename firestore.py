from dotenv import dotenv_values

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Load environment variables from .env file
env_vars = dotenv_values('.env')

# Use a service account.
# https://stackoverflow.com/questions/47671717/google-api-core-exceptions-forbidden-403-missing-or-insufficient-permissions
key = env_vars['GOOGLE_APPLICATION_CREDENTIALS']
cred = credentials.Certificate(key)

app = firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection('users').document('alovelace')
doc_ref.set({
    'first': 'Ada',
    'last': 'Lovelace',
    'born': 1815
})