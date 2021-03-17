require("dotenv").config({ path : '.env'}); // Hide env details

const express = require("express");
const cors = require("cors");
const app = express();
const accountRoutes = require("../server/Routes/accountRoutes");

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT: " + process.env.PORT);
});

app.use(cors()); // Enable CORS - Cross Origin Resource Sharing (React Server)
app.use("/", accountRoutes);
