const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    teams: {
        type: Array,
        required: true,
    },
});

module.exports = mongoose.model('League', leagueSchema);
