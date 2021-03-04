const express = require("express");
const route = express.Router();
const {
    getRecipe
} = require("../api.controller");

route
.get("/",getRecipe)

module.exports = route;