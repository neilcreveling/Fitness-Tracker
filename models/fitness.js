const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Enter a name for exercise'
    },
    type: {
        type: String,
        trim: true,
        required: 'Enter a type a type of exercise'
    },
    weight: {
        type: Number,
        required: 'Enter a weight'
    },
    sets: {
        type: Number,
        required: 'Enter a number of sets'
    },
    reps: {
        type: Number,
        required: 'Enter a number of reps'
    },
    duration: {
        type: String,
        trim: true,
        required: 'Enter duration of exercise in minutes'
    },
    distance: {
        type: Number,
        required: [
            function() { return this.type === "Cardio"},
            'Enter distance traveled'
        ]
    },
})