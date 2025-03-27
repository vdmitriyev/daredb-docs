---
sidebar_position: 3
---

# How to Use: Core API Overview

The in-memory database provides three simple HTTP endpoints to interact with stored data. By default endpoints are protected by JWT:

### POST /login

Get the JWT token. For credentials check file: `config.toml`:
```
curl --insecure -X POST -u ADMIN:PASSWORD https://127.0.0.1:2605/login
```

* `--insecure` is a workaround to overcome issues for `TLS` version working with self-signed certificates
* `-H "Authorization: <TOKEN>` is how thw JWT must be passed by, note there is no `Bearer` in the header

### GET /get/{key}

This endpoint retrieves an item from the hashtable using a specific key.

Example usage with cURL:

```bash
curl -X GET -H "Authorization: <TOKEN>" http://127.0.0.1:2605/get/myKey
```

### SET /set

This endpoint inserts a new item into the hashtable. The request body should contain the key and value of the new item.

Example usage with cURL:

```bash
curl -X POST -H "Authorization: <TOKEN>" -d '{"myKey":"myValue"}' http://127.0.0.1:2605/set
```

### DELETE /delete/{key}

This endpoint deletes an item from the hashtable using a specific key.

Example usage with cURL:

```bash
curl -X DELETE -H "Authorization: <TOKEN>" http://127.0.0.1:2605/delete/myKey
```
