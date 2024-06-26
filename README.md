### About

Documentation repository of DareDB database. Documentation can be found here: [daredb-docs](https://vdmitriyev.github.io/daredb-docs/)

## Notes

* This documentation is based on [docusaurus](https://docusaurus.io/). 
* To edit/add documentation use the markdown files from ```website/docs/```.

### Deployment as Github Pages

* Configure Github Pages, so it displays "gh-pages" branch
* Following Github Action will be used to build an deploy HTML to "gh-pages" branch:
	+ ```build-and-deploy-docs.yml```

### Usage: Docker

* Clone repo
* Navigate to website
	```
	cd website
	```
* Run dev server with documentation
	```
	docker compose --file dev.docker-compose.yml up -d --build
	```
* Wait a bit, the server requires a bit of time to start
* Access server on http://localhost:3000
* Edit documentation in markdown format inside [website/docs](website/docs)
* Service inside docker container runs with options (see file ```website/package.json```)
	```
	docusaurus start --host 0.0.0.0 --poll 2000
	```
* Re-compilation of the markdown could take a while after edit

### Init: Docker

* Should be run only once and will create all boilerplate required
* Create a empty container
```
docker compose --file init.docker-compose.yml up -d --build
```
* SSH into container and run
```
npx create-docusaurus@latest website classic
```

### Materials

https://docusaurus.community/knowledge/deployment/docker/

### License

* For components related to [docusaurus](https://docusaurus.io/) see their licensing