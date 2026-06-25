# Intentionally using EOL base image to demonstrate container vulnerabilities
# DO NOT use this Dockerfile in production
FROM node:14

WORKDIR /app

# Bad practice: copying everything including potential secrets
COPY . .

RUN npm install

# Bad practice: running as root (default in node:14)
EXPOSE 3000

CMD ["node", "server.js"]
