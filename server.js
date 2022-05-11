require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

const leaguesRouter = require("./routes/leagues");
app.use("/leagues", leaguesRouter);

const teamsRouter = require("./routes/teams");
app.use("/teams", teamsRouter);

app.listen(4000, () => console.log("Server Started"));
