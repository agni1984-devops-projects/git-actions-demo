FROM python:3.12

COPY requirements.txt /requirements.txt

RUN pip install -r requirements.txt

COPY deployment.py /deployment.py

CMD [ "python", "/deployment.py" ]
# This Dockerfile is used to create a Docker image for deploying to S3.
