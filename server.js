require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { DBconnection } = require("./Configure/DBconnection.js");
const allRoutes = require("./Routes");
/* -------------------------------------------------------------------------- */
/*                             // todo All middleware                         */
/* -------------------------------------------------------------------------- */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
DBconnection();
app.use(allRoutes);

/* -------------------------------------------------------------------------- */
/*                             // todo All middleware                         */
/* -------------------------------------------------------------------------- */

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
