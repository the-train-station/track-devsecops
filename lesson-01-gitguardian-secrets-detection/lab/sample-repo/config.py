"""
Sample Python configuration with FAKE secrets for GitGuardian training.

WARNING: All credentials below are FAKE and intentionally placed
for secrets-detection training purposes.
"""

# FAKE - FOR TRAINING ONLY: These are not real AWS credentials
AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE"
AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
AWS_REGION = "us-east-1"

# FAKE - FOR TRAINING ONLY: This is not a real private key
RSA_PRIVATE_KEY = """-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA0Z3VS5JJcds3xfn/ygWep4PAtGoOgiAfEt0hb9EXAMPLE
FAKE_KEY_CONTENT_FOR_TRAINING_PURPOSES_ONLY_NOT_A_REAL_KEY
DO_NOT_USE_THIS_IN_ANY_REAL_APPLICATION
-----END RSA PRIVATE KEY-----"""

# FAKE - FOR TRAINING ONLY: This is not a real database password
DATABASE_CONFIG = {
    "host": "prod-db.cluster-abc123.us-east-1.rds.amazonaws.com",
    "port": 5432,
    "username": "db_admin",
    "password": "Pr0duction_P@ssw0rd_2024!",
    "database": "app_production",
}

# FAKE - FOR TRAINING ONLY: This is not a real Slack webhook
SLACK_WEBHOOK_URL = (
    "https://hooks.example.com/services/TXXXXXXXXX/BXXXXXXXXX/FAKE_WEBHOOK_TOKEN_HERE"
)


def get_config():
    """Return application configuration."""
    return {
        "aws_key": AWS_ACCESS_KEY_ID,
        "aws_secret": AWS_SECRET_ACCESS_KEY,
        "database": DATABASE_CONFIG,
        "slack": SLACK_WEBHOOK_URL,
    }
