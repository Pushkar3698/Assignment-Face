# Infinite Scrolling Contact List

This is a web application built using React that displays an infinite scrolling list of contacts. The contacts are loaded dynamically from an external API as the user scrolls down the list.
## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Documentations](#Documentations)
- [Dependencies](#dependencies)
- [Tech Stack](#techstack)
- [License](#License)
- [Badges](#Badges)
## Installation


To get started with the Project, you'll need to have Node.js installed on your machine. Once you have those installed, follow these steps:

```bash
Clone the repository to your local machine: git clone https://github.com/Pushkar3698/Assignment-Face
Navigate to the project directory
Install the required dependencies: npm install
Start the development server: npm start
Open a web browser and go to http://localhost:3000 to view the application.rt
```


## Features

The following features are available in the API:

- Infinite scrolling: contacts are loaded as the user scrolls down the list
- Responsive design: the application is optimized for desktop and mobile devices

## Contributing

Contributions are welcome! To contribute to the project, follow these steps:
```bash
1. Fork the repository and create a new branch for your changes.
2. Make your changes and test them locally.
3. Create a pull request with a description of your changes.
4. Wait for a code review and approval before merging.
```

**Note**: Please ensure that your code adheres to the existing style and passes the unit tests before submitting a pull request.


## Documentation

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React-Loader](https://loading.io/css/)
- [React-dom](https://reactjs.org/docs/react-dom.html)
- [React-router-dom](https://reactrouter.com/docs)
- [IntersectionObserve api](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [framer-motion](https://www.framer.com/motion/)



## Dependencies

The following dependencies are required to run the Face-pre assignment naming infinity Scroll:

"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router": "^6.8.1",
    "react-router-dom": "^6.8.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }

## Tech Stack

The application was built using the following technologies:
```bash
1. React: A JavaScript library for building user interfaces. React is used to create reusable UI components that can be combined to create complex web applications.

2. React Router: A routing library for React applications. React Router is used to manage the navigation between different views in the application.

4. Css: Responsiveness is achieved by using plain css.Entire project is made using plain Css.

5. Loading.io : A library for displaying loading indicators in Js applications. 

6. Intersection Observer Api : The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

7. Framer-motion : Framer Motion is an open source, production-ready library that’s designed for all creative developers.
```
## API Reference

The application uses the Random User API to fetch contact data. This API generates random user data, including names, email addresses, and profile pictures. The application makes API requests to this service as the user scrolls down the contact list, allowing it to display an unlimited number of contacts without performance issues.
## License

- [MIT](https://choosealicense.com/licenses/mit/)


## Badges

[![React](https://img.shields.io/badge/React-17.0.2-blue)](https://reactjs.org/)

[![React Router](https://img.shields.io/badge/React_Router-5.2.0-green)](https://reactrouter.com/)
