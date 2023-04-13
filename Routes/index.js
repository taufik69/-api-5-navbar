const express = require("express");
const _ = express.Router();
const allRoutes = require("./api");
const baseUrl = process.env.BASE_URL;

/* -------------------------------------------------------------------------- */
/*                         // todo api control routes                         */
/* -------------------------------------------------------------------------- */
_.use(baseUrl, allRoutes);
_.use(baseUrl, (req, res) => {
  Error: `Occurs from Routes ${req.url} routes , move to valid Routes`;
});

/* -------------------------------------------------------------------------- */
/*                         // todo api control routes                         */
/* -------------------------------------------------------------------------- */

module.exports = _;
