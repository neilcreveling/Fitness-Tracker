const router = require('express').Router();
const { Workout } = require('../../models');

router.get('/', (req, res) =>
    Workout.find({})
        .sort({ date: -1 })
        .then((dbWorkout) => res.json(dbWorkout))
        .catch((err) => res.status(400).json(err))
);