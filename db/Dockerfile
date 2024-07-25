FROM python:3.9-slim

WORKDIR /app

COPY load_data.py .

RUN pip install pymongo

CMD ["python", "load_data.py"]
