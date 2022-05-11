const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    league: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Team", teamSchema);
