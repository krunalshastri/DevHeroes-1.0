<h1 align="center">
DevHeroes
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

> DevHeroes is a platform for connecting developers of various backgrounds with each other. Here, Developers can create/edit their profiles and showcase their skills.

## Clone or Download

```terminal
$ git clone https://github.com/krunalshastri/DevHeroes-1.0.git
$ npm i
```

## Project Structure

```terminal
LICENSE
package.json
DevHeroes/
   package.json
   .env (to create .env, check [prepare your secret session])
DevHeroes/client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequirements

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

Notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)

```terminal
$ cd client   // go to client folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally
```

## Server-side usage(PORT: 5000)

### Start

```terminal
$ npm i       // npm install pacakges
$ npm run dev // run it locally
```

# Dependencies(tech-stacks)

| Client-side              | Server-side                |
| ------------------------ | -------------------------- |
| axios: ^0.21.1           | bcryptjs: ^2.4.3           |
| prop-types: ^15.7.2      | gravatar: ^1.8.1           |
| lodash: ^3.10.1          | cors: ^2.8.5               |
| react: ^17.0.2           | dotenv: ^8.2.0             |
| react-dom: ^17.0.2       | express: ^4.17.1           |
| react-redux: ^7.2.4      | jsonwebtoken: ^8.5.1       |
| react-router-dom: ^5.2.0 | mongoose: ^5.12.7          |
| redux: ^4.1.0            | express-validator: ^6.10.1 |
| redux-thunk: ^2.3.0      |

# Screenshots of this project

## User visit public and Home page

![Imgur](https://i.imgur.com/0AWnvKtl.png)

## Login/SignUp

![Imgur](https://i.imgur.com/UWH3UnOl.png)

## Dashboard

![Imgur](https://i.imgur.com/rnURBpRl.png)

## Create/Edit profile

![Imgur](https://i.imgur.com/jJqPod6l.png) ![Imgur](https://i.imgur.com/ol5ZzhSl.png)

## Browse others' profile

![Imgur](https://i.imgur.com/pJTatdxl.png)

## See particular full profile

![Imgur](https://i.imgur.com/mn2ga5pl.png)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/krunalshastri/DevHeroes-1.0/issues) (preferred)

Email Me: krunalshastri00@gmail.com

## Author

[Krunal Shastri](https://github.com/krunalshastri)

### License

[MIT](https://github.com/krunalshastri/DevHeroes-1.0/blob/master/LICENSE)
