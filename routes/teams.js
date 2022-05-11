const express = require("express");
const router = express.Router();
const Team = require("../src/database/team");

// Getting all
router.get("/", async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting one
router.get("/:id", getTeam, (req, res) => {
    res.json(res.team);
});

// Creating one
router.post("/", async (req, res) => {
    const team = new Team({
        name: req.body.name,
        league: req.body.league,
    });

    try {
        const newTeam = await team.save();
        res.status(201).json(newTeam);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating one
router.patch("/:id", getTeam, async (req, res) => {
    if (req.body.name != null) {
        res.team.name = req.body.name;
    }
    if (req.body.league != null) {
        res.team.league = req.body.league;
    }

    try {
        const updatedTeam = await res.team.save();
        res.json(updatedTeam);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting one
router.delete("/:id", getTeam, async (req, res) => {
    try {
        await res.team.remove();
        res.json({ message: "Deleted Team" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getTeam(req, res, next) {
    let team;
    try {
        team = await Team.findById(req.params.id);

        if (team == null) {
            return res.status(404).json({ message: "Cannot find team" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.team = team;
    next();
}

module.exports = router;