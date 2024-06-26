---
sidebar_position: 6
---

# Configuration

### Configuration Concept

Here is an initial concept how a configuration file could work:

* Name of the configuration file should be "config.toml" 
* Configuration file should be located at the root folder of the database
* Configuration file should be generated on the initial start (if not such file exists)
* Configuration file should use ```TOML``` format
* Configuration values should be read as follows:
	+ ```<CATEGORY><CONFIGURATION>```
	+ Ex. "server.host"
* There is should be a possibility to override configuration values from the file using "environment variables". It works as follows:
    1. On start, a configuration file should be read and the configs parameters should be set
    2. Then environment variables should be red-read and re-write the original configs values supplied within the configuration file

### Configuration Parameters and Default Values

The database should use a configuration file that will defined following parameters:

| **Configuration** | **Default** | **ENV Name** | **Description** | **Category**| **Status**|
|---|---|---|---|---|---|
| host| 127.0.0.1 | DARE_HOST | Name or IP address of the server | server | NOT IMPLEMENTED|
| port | 2605 | DARE_PORT | Port number for the server | server |NOT IMPLEMENTED|
| admin_user | admin | DARE_USER | Username for the admin user (future implementation) | server | NOT IMPLEMENTED|
| admin_password | ```<GENERATED-ON-START>``` | DARE_PASSWORD | Password for the admin user (future implementation) | server |NOT IMPLEMENTED|
| log_level | INFO | DARE_LOG_LEVEL | Log level | log | NOT IMPLEMENTED|
| log_file | daredb.log | DARE_LOG_FILE | Path to the desired location for log files (optional) | log | NOT IMPLEMENTED|
| data_dir | data | DARE_DATA_DIR | Path to the desired location to persist data (if required) | settings | NOT IMPLEMENTED|
| tls_enabled | False | DARE_TLS_ENABLED | Enables HTTPS to access data | security | NOT IMPLEMENTED|
| tls_cert_private | `<ROOT>`/settings/cert_private.pem | DARE_TLS_CERT_PRIVATE | Private certificate for secure connection | security | NOT IMPLEMENTED|
| tls_cert_public | `<ROOT>`/settings/cert_public.pem | DARE_TLS_CERT_PUBLIC | Public certificate for secure connection | security | NOT IMPLEMENTED|


