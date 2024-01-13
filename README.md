# contact-book-ExpressApp

A simple CRUD web application to manage a contact book using Node.js and Express.

## Update

As of 1/13/2024, for ALAB 318.2.1:

1. Used `friends-data.js` to populate the app. In the future, will try to use MongoDB.
2. `Add Friend` feature is not developed yet. Only the page is rendering using the EJS view engine.
3. Headshot images are not displaying on the homepage. Will solve this later.

## ALAB 318.2.1 Features

1. View templates include:
   - Home page to display a table of all friends' contact info.
   - Add friend page.
   - Gallery page.
2. Router parameter used friend id `/friends/:id` to return a friend's details in JSON.
3. A button to use `res.download` method to download a gallery picture (not working; will investigate later).

### Preview

![ALAB 318.2.1 Preview](./preview/preview1.png)
![ALAB 318.2.1 Preview](./preview/preview2.png)
![ALAB 318.2.1 Preview](./preview/preview3.png)
![ALAB 318.2.1 Preview](./preview/preview4.png)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add, edit, and delete contacts.
- View a gallery of images.

## Project Structure

```plaintext
/project-root
  /routes
    routes.js
  /views
    /layout
        header.ejs
        footer.ejs
    add_friend.ejs
    gallery.ejs
    index.ejs
  /images
    squad.jpg
  /data
    friends-data.js
  main.js
  .env
  .gitignore
  README.md
```
