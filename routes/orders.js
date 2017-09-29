"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  route.post("/", (req, res) => {
    knex('orders')
    .insert({user_id: req.user_id})
    .insert({vendor_id: req.vendor_id});
  })

// full list of orders
  router.get("/", (req, res) => {
    knex
        .select(['orders.id', 'orders.user_id', 'orders.vendor_id', 'orders.est_mins','orders.completed', 'orders.order_date',
      'users.name AS user_name' , 'users.email AS user_email', 'users.phone_number AS user_phone_number',
      'vendors.name AS vendor_name', 'vendors.address AS vendor_address', 'vendors.phone_number AS vendor_phone_number'])
        .from('orders')
        .leftJoin('vendors', 'orders.vendor_id', 'vendors.id')
        .leftJoin('users', 'orders.user_id', 'users.id')
        .then((results) => {
          res.json(results);
        });
  });
  router.get("/users", (req, res) => {
    res.redirect("/api/orders");
  })

// food list of a particular order
  router.get("/:id", (req, res) => {
    knex
        .select("*")
        .from('orders_food')
        .leftJoin('orders', 'orders_food.order_id', 'orders.id')
        .leftJoin('food', 'orders_food.food_id', 'food.id')
        .where('orders_food.order_id', req.params.id)
        .then((results) => {
          res.json(results);
        });
  })

// order list of a particular user
  router.get("/users/:id", (req, res) => {
    knex
        .select(['orders.id', 'orders.user_id', 'orders.vendor_id', 'orders.est_mins', 'orders.completed',
      'users.name AS user_name' , 'users.email AS user_email', 'users.phone_number AS user_phone_number',
      'vendors.name AS vendor_name', 'vendors.address AS vendor_address', 'vendors.phone_number AS vendor_phone_number'])
        .from('orders')
        .leftJoin('vendors', 'orders.vendor_id', 'vendors.id')
        .leftJoin('users', 'orders.user_id', 'users.id')
        .where('orders.user_id', req.params.id)
        .then((results) => {
          res.json(results);
        });
  })
  return router;
}




