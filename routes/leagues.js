const express = require('express');
const router = express.Router();
const League = require('../src/database/league');

// Getting all
router.get('/', async (req, res) => {
    try {
        const leagues = await League.find();
        res.json(leagues);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting one
router.get('/:id', getLeague, (req, res) => {
    res.json(res.league);
});

// Create one
router.post('/', async (req, res) => {
    const league = new League({
        name: req.body.name,
        country: req.body.country,
    });

    try {
        const newLeague = await league.save();
        res.status(201).json(newLeague);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating one
router.patch('/:id', getLeague, async (req, res) => {
    if (req.body.name != null) {
        res.league.name = req.body.name;
    }
    if (req.body.country != null) {
        res.league.country = req.body.country;
    }

    try {
        const updatedLeague = await res.league.save();
        res.json(updatedLeague);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting one
router.delete('/:id', getLeague, async (req, res) => {
    try {
        await res.league.remove();
        res.json({ message: 'Deleted League' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Find specific team for above functions
async function getLeague(req, res, next) {
    let league;
    try {
        league = await League.findById(req.params.id);

        if (league == null) {
            return res.status(404).json({ message: 'Cannot find league' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.league = league;
    next();
}

module.exports = router;
