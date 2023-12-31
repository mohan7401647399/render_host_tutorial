// console.log("node backend");


const express = require("express");
require("dotenv").config();

// console.log(process.env.HOST_NAME);

if (process.env.HOST_NAME === "dev") {
    console.log("dev is running");
} else {
    console.log("prod is running");
}

//      Create http server

const PORT = process.env.HOST_NAME === "dev" ? process.env.DEV_PORT : process.env.PROD_PORT;

const HTTP_SERVER = express();

HTTP_SERVER.get('/', (req, res) => {
    return res.status(200).json({
        message: "Server running successfully"
    })
})

HTTP_SERVER.listen(PORT, () => {
    console.log(`server started successfully ${PORT}`);
})