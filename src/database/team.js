const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    league: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leagues',
        required: true,
    },
    mp: {
        type: Number,
        required: true,
    },
    wins: {
        type: Number,
        required: true,
    },
    draws: {
        type: Number,
        required: true,
    },
    losses: {
        type: Number,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Team', teamSchema);
