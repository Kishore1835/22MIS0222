const express = require("express");

const app = express();

app.use(express.json());

const notifications = [
    {
        id: 1,
        type: "Placement",
        message: "Company hiring drive",
        read: false
    },
    {
        id: 2,
        type: "Result",
        message: "Mid sem results published",
        read: true
    }
];

app.get("/notifications", (req, res) => {
    res.json(notifications);
});

app.post("/notifications", (req, res) => {

    const notification = req.body;

    notifications.push(notification);

    res.json({
        message: "Notification added",
        notification
    });
});

app.put("/notifications/:id/read", (req, res) => {

    const id = parseInt(req.params.id);

    const notification = notifications.find(n => n.id === id);

    if (notification) {
        notification.read = true;
    }

    res.json({
        message: "Notification marked as read"
    });
});

app.delete("/notifications/:id", (req, res) => {

    res.json({
        message: "Notification deleted"
    });
});

app.listen(4000, () => {
    console.log("Notification server running on port 4000");
});
