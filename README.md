# generator-angular-blueprint [![Build Status](https://secure.travis-ci.org/DannyBlueDesign/generator-angular-blueprint.png?branch=master)](https://travis-ci.org/DannyBlueDesign/generator-angular-blueprint)

> [Yeoman](http://yeoman.io) generator

Generator Angular Blueprint introducing the idea of blueprints to an angular schaffolding. It is now very simple to overwrite generator templates in your local project.

## Generators

### APP

Generates the application skelleton

```
yo angular-blueprint
```

### Route

Generates a new route and all of its components

Example:
```
yo angular-blueprint:route home
[?] Where should I generate this? (./client/app/views/home)
```
Produces:
```
client/app/views/home/home.controller.js
client/app/views/home/home.route.js
client/app/views/home/home.view.html
client/app/views/home/home.view.scss
```

### Controller

Generates a new controller

Example:
```
yo angular-blueprint:controller home
[?] Where should I generate this? (./client/app/views/home)
```
Produces:
```
client/app/views/home/home.controller.js
```

### Factory

Generates a new Angular Factory

Example:
```
yo angular-blueprint:factory user
[?] Where should I generate this? (./client/app/services/user)
```
Produces:
```
client/app/services/user/user.factory.js
```

### Service

Generates a new Angular Service

Example:
```
yo angular-blueprint:factory user
[?] Where should I generate this? (./client/app/services/user)
```
Produces:
```
client/app/services/user/user.service.js
```

### View

Generates a new Angular Factory

Example:
```
yo angular-blueprint:view about
[?] Where should I generate this? (./client/app/views/about)
```
Produces:
```
client/app/views/about/user.view.html
client/app/views/about/user.view.scss
```

## To contribute
```
git clone https://github.com/DannyBlueDesign/generator-angular-blueprint.git
```

To run tests
```
npm tests
```

To install generator
```
npm link
```

this should allow you to run
```
yo angular-blueprint
```
