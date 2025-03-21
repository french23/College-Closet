# backend/Dockerfile

FROM python:3.11-slim

WORKDIR /code

COPY ./src/requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./src /code

# Run the FastAPI app using uvicorn with multiple workers
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]

