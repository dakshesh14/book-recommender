import os

from dotenv import load_dotenv

load_dotenv()

ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS') or ['*']
DEBUG = os.getenv('DEBUG') or False
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
