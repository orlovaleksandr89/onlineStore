## RedFox Online - eCommerce Shop Pet Project

**Website URL** https://redfox-online.herokuapp.com/

**Testing Admin Login credentials:**

- email: admin@mail.com
- password: Admin1234

**Project Overview:** StoreFront/eCommerce application for business to deliver brand identity and to sell products to retail consumers. Built in a way that is flexible/reusable.

**Application Features**

- Views: Home, products, product details, shopping cart
- admin panel: add/delete/update products
- Front-facing usage: user can get all the way to checkout before being required to login/signup

**Technologies:**

_MERN Stack_

- MongoDB (Atlas Cloud Database)
- Express
- React
- Node

**Libraries:**

- react-bootstrap for styling
- jwt web tokens/bcrypt for authentification - custom middleware to protect routes
- toast for dynamic messaging
- moment.js to display past order dates
- mongoose for defining MongoDB schema
- react-redux, rtk for state managment

**API**

- react-paypal-express-checkout for payment

**Deployment**

- Backend and Frontend: heroku

**Database**

A MongoDB Atlas database is used for the data layer. The database schemas are defined with 6 models: USER, ROLE, ORDER, TYPE, ITEM and CART.
