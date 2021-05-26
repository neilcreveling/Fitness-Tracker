const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
        {
            type: { type: String },
            name: String,
            distance: Number,
            duration: Number,
            weight: Number,
            sets: Number,
            reps: Number,
        },
    ],
    totalDuration: {
        type: Number,
        default: 0,
    },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;