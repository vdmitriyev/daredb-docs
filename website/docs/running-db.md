---
sidebar_position: 2
---

# Running the Database

### Using Docker

To run the database as a Docker image, ensure you have Docker installed on your system. First, navigate to the root directory of your project and execute the following command to build the Docker image:

```bash
docker build -t dare-db .
```
Once the image is built, you can run the database as a Docker container with the following command (*note: a configuration option ```-e DARE_HOST="0.0.0.0"``` is explicitly set to enable connections from the host machine to the database running within the Docker container*):

```bash
docker run -d -p "127.0.0.1:2605:2605" -e DARE_HOST="0.0.0.0" dare-db 
```

This command will start the database as a Docker container in detached mode, exposing port 2605 of the container to port ```2605``` on your ```localhost```.

### Using TLS Version in Docker

Build special Docker image, which will generate certificates

```bash
docker build -t dare-db-tls -f Dockerfile.tls.yml .
```

Once the image is built, you can run the database as a Docker container with the following command:

```bash
docker run -d -p "127.0.0.1:2605:2605" -e DARE_HOST="0.0.0.0" -e DARE_PORT=2605 -e DARE_TLS_ENABLED="True" -e DARE_CERT_PRIVATE="/app/settings/cert_private.pem" -e DARE_CERT_PUBLIC="/app/settings/cert_public.pem" dare-db-tls
```

Access API over HTTPS on https://localhost:2605