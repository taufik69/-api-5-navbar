const express = require("express");
const _ = express.Router();

/* -------------------------------------------------------------------------- */
/*       //todo handaling all upcoming request and responsce this routes      */
/* -------------------------------------------------------------------------- */

_.post("/createnavbar", async (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {
    res.status(404).json({
      Error: `Occur from ${req.url} routes : ${error}`,
    });
  }
});

/* -------------------------------------------------------------------------- */
/*       //todo handaling all upcoming request and responsce this routes      */
/* -------------------------------------------------------------------------- */

module.exports = _;
