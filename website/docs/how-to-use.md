---
sidebar_position: 3
---

# How to Use

The in-memory database provides three simple HTTP endpoints to interact with stored data:

### GET /get/key

This endpoint retrieves an item from the hashtable using a specific key.

Example usage with cURL:

```bash
curl -X GET http://localhost:2605/get/myKey
```

### SET /set

This endpoint inserts a new item into the hashtable. The request body should contain the key and value of the new item.

Example usage with cURL:

```bash
curl -X POST -d '{"myKey":"myValue"}' http://localhost:2605/set
```

### DELETE /delete/key

This endpoint deletes an item from the hashtable using a specific key.

Example usage with cURL:

```bash
curl -X DELETE http://localhost:2605/delete/myKey
```