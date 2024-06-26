---
sidebar_position: 10
---

# Example Usage

Below is a simple example of how to use this database in a Go application:

```go
package main

import (
    "fmt"
    "net/http"
    "bytes"
)

func main() {
    // Example of inserting a new item
    _, err := http.Post("http://localhost:2605/set", "application/json", bytes.NewBuffer([]byte(`{"myKey":"myValue"}`)))
    if err != nil {
        fmt.Println("Error while inserting item:", err)
        return
    }

    // Example of retrieving an item
    resp, err := http.Get("http://localhost:2605/get/myKey")
    if err != nil {
        fmt.Println("Error while retrieving item:", err)
        return
    }
    defer resp.Body.Close()

    // Example of deleting an item
    req, err := http.NewRequest("DELETE", "http://localhost:2605/delete/myKey", nil)
    if err != nil {
        fmt.Println("Error while deleting item:", err)
        return
    }
    _, err = http.DefaultClient.Do(req)
    if err != nil {
        fmt.Println("Error while deleting item:", err)
        return
    }
}
```