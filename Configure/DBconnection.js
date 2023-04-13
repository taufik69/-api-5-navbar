const mongoose = require("mongoose");

/* -------------------------------------------------------------------------- */
/*                         // todo DBconnection code                          */
/* -------------------------------------------------------------------------- */

exports.DBconnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log(`Database Sucessfully Connected`);
    })
    .catch((err) => {
      console.log(`Erro from Database configuratin file : ${err}`);
    });
};

/* -------------------------------------------------------------------------- */
/*                         // todo DBconnection code                          */
/* -------------------------------------------------------------------------- */
