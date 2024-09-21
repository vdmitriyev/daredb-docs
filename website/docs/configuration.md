---
sidebar_position: 6
---

# Configuration

### Configuration Concept

This document outlines a configuration concept, detailing the steps involved in the configuration process:

* Default name of the configuration file is "config.toml" 
* Configuration file should be located at the root folder of the database
* The application will create a configuration file upon initial startup, if one is not already present.
* Configuration file uses ```TOML``` format
* Configuration values should be read as follows:
    + ```<CATEGORY><CONFIGURATION>```
    + Ex. "server.host"
* Database leverages environment variables to dynamically modify settings defined in a configuration file. This process typically involves two steps:
    + **Initial Configuration Load**: During startup, the application reads the configuration file and sets configuration parameters based on the values from the file.
    + **Environment Variable Override**: The  database then checks relevant environment variables. If an environment variable with a matching name exists, its value is used to override the corresponding value loaded from the configuration file.

### Configuration Parameters and Default Values

The database should use a configuration file that will defined following parameters:

| **Configuration** | **Default** | **ENV Name** | **Description** | **Category**| **Status**|
|---|---|---|---|---|---|
| host| 127.0.0.1 | DARE_HOST | Name or IP address of the server | server | added: v0.0.3|
| port | 2605 | DARE_PORT | Port number for the server | server |added: v0.0.3|
| admin_user | admin | DARE_USER | Username for the admin user (future auth) | server | added: v0.0.3|
| admin_password | ```<GENERATED-ON-START>``` | DARE_PASSWORD | Password for the admin user (future implementation) | server |added: v0.0.3|
| log_level | INFO | DARE_LOG_LEVEL | Log level | log | added: v0.0.3|
| log_file | daredb.log | DARE_LOG_FILE | Path to the desired location for log files (optional) | log | added: v0.0.3|
| data_dir | data | DARE_DATA_DIR | Path to the desired location to persist data (if required) | settings | added: v0.0.3|
| tls_enabled | False | DARE_TLS_ENABLED | Enables HTTPS to access data | security | added: v0.0.3|
| tls_cert_private | `<ROOT>`/settings/cert_private.pem | DARE_TLS_CERT_PRIVATE | Private certificate for secure connection | security | added: v0.0.3
| tls_cert_public | `<ROOT>`/settings/cert_public.pem | DARE_TLS_CERT_PUBLIC | Public certificate for secure connection | security | added: v0.0.3|

### Internal Settings and Constants

The current section documents a hardcoded settings and constants used in the DareDB

* `JWT` token has an `expirationTime` of a token set to `5 minutes`. After this period, a new  JWT token must be requested.
