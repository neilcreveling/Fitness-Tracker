const router = require('express').Router();
const { Workout } = require('../../models');

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

router.get('/range', (req, res) => {
    Workout.aggregate(
        [
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration',
                    },
                    combinedWeight: {
                        $sum: '$exercises.weight',
                    }
                }
            }
        ],
        (err, data) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(data);
                res.json(data);
            }
        }
    )
});

module.exports = router;