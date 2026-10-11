FROM python:3.12-slim
WORKDIR /opt/hirkan
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY main.py agent.py app.js style.css index.html logo-light.png logo-dark.png ./
ENV HIRKAN_DATA=/data HIRKAN_HOST=0.0.0.0 HIRKAN_PORT=8000
VOLUME ["/data"]
EXPOSE 8000
CMD ["python", "main.py"]
