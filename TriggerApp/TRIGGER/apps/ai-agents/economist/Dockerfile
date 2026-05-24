# Economist Agent Dockerfile (Python)
FROM python:3.11-slim

WORKDIR /app/apps/ai-agents

# Copy requirements
COPY apps/ai-agents/requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy agent code
COPY apps/ai-agents/economist/ ./economist/

EXPOSE 8004

CMD ["python", "economist/main.py"]
