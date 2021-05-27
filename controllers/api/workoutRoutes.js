const router = require('express').Router();
const { Exercise, Model } = require('../../models');

router.get('/', (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.post('/', ({ body }, res) => {
    Workout.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put('/:id', ({ params, body }, res) => {
    Workout.findOneAndUpdate(
        { _id: params.id },
        { $push : { exercises: body } },
        { upsert: true, useFindandModify: false },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        }
    //).then((updatedWorkout) => res.json(updatedWorkout))
)});

module.exports = router;