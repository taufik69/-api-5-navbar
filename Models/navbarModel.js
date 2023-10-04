const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const collenctions = "NavbarsTaufik";
const fields = {
  logo: {
    type: String,
    trim: true,
  },
  navItems: [
    {
      _id: 0,
      item: {
        type: String,
        trim: true,
      },
      dropDown: {
        type: Boolean,
      },
      dropDownItem: [
        {
          _id: 0,
          dropItem: String,
        },
      ],
    },
  ],
  buttonOne: {
    text: String,
    link: String,
    visibility: Boolean,
  },
  buttonTwo: {
    text: String,
    link: String,
    visibility: Boolean,
  },
  buttonThree: {
    text: String,
    link: String,
    visibility: Boolean,
  },
  created: {
    type: Date,
    default: Date.now,
  },
};

const navbarSchema = new Schema(fields);

module.exports = model("navbar", navbarSchema, collenctions);
