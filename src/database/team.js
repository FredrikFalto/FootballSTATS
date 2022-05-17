const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    league: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "leagues",
        required: true,
    },
});

module.exports = mongoose.model("Team", teamSchema);
