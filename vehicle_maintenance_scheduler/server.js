require("dotenv").config();

const express = require("express");
const axios = require("axios");

const optimizeTasks = require("./scheduler");

const app = express();

app.use(express.json());

const PORT = 3000;

const TOKEN = process.env.TOKEN;
console.log(TOKEN);

app.get("/schedule", async (req, res) => {

    try {

        const depotResponse = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer ${TOKEN.trim()}`
                }
            }
        );

        const vehicleResponse = await axios.get(
            "http://4.224.186.213/evaluation-service/vehicles",
            {
                headers: {
                    Authorization: `Bearer ${TOKEN.trim()}`
                }
            }
        );

        const depots = depotResponse.data.depots;
        const vehicles = vehicleResponse.data.vehicles;

        const result = [];

        for (let depot of depots) {

            const optimized = optimizeTasks(
                vehicles,
                depot.MechanicHours
            );

            result.push({
                depotId: depot.ID,
                mechanicHours: depot.MechanicHours,
                selectedTasks: optimized.selected,
                totalImpact: optimized.totalImpact,
                totalHours: optimized.totalHours
            });
        }

        res.json(result);

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            message: "Error fetching data"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
