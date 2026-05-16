require("dotenv").config();
const axios = require("axios");
const TOKEN = process.env.TOKEN;
async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN.trim()}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Log created"); 
        console.log(response.data);

    } catch (error) {
        console.log("Logging failed");

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

module.exports = Log;

