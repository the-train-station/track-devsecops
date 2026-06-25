.PHONY: install setup-hooks scan scan-repo clean

# Install ggshield and pre-commit
install:
	pip install ggshield pre-commit

# Install pre-commit hooks into the local repo
setup-hooks:
	pre-commit install

# Scan staged changes for secrets
scan:
	ggshield secret scan path ./sample-repo/

# Scan the full repository history for secrets
scan-repo:
	ggshield secret scan repo .

# Run pre-commit hooks manually on all files
scan-all-hooks:
	pre-commit run --all-files

# Show ggshield configuration and auth status
status:
	ggshield auth status
	ggshield config list

clean:
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	find . -name "*.pyc" -delete 2>/dev/null || true
