const express = require("express");
const _ = express.Router();
const navbarSchema = require("../../Models/navbarModel");


/* -------------------------------------------------------------------------- */
/*       //todo handaling all upcoming request and responsce this routes      */
/* -------------------------------------------------------------------------- */

_.post("/createnavbar", async (req, res) => {
  try {
    const { logo, navItems, buttonOne, buttonTwo, buttonThree } = req.body;

    const postNavbarData = await new navbarSchema({
      logo,
      navItems,
      buttonOne,
      buttonTwo,
      buttonThree,
    }).save();
    res.status(200).json(postNavbarData);
  } catch (error) {
    res.status(404).json({
      Error: `Occur from ${req.url} routes : ${error}`,
    });
  }
});

_.get("/getnavbar", async (req, res) => {
  try {
    const getNavbarData = await navbarSchema.findOne({});
    res.status(200).json(getNavbarData);
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
