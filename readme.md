There several list how to work in my project:

```sh
$ yarn dev // use for compiling in development version
$ yarn build // use for compiling in build version
$ yarn test // use for testing my app
$ yarn watch // use for start the server to running the project (also enable hot reaload features). By default, you can run on browser with url localhost:3000
```

To run with docker:

```sh
$ docker build -t shopee-test/node-web-app .
```

You can check if you success creating docker image by command:

```sh
$ docker images
```

Then, to start running the container, use:

```sh
$ docker run -p 49160:8080 -d shopee-test/node-web-app
```

Then you must go inside the container and running package command:

```sh
$ docker exec -it <container id> /bin/bash
$ npm start
```

You can search about container id using:

```sh
$ docker ps
```

Nb: You can stil running the project although it blocking some port.

Thanks!
