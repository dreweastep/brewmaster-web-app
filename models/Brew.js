import mongoose from 'mongoose'

const { String, Number } = mongoose.Schema.Types;

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    unit: {
        type: String,
        required: false
    },
    buyLocation: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: false
    }
});

const BatchSchema = new mongoose.Schema({
    brewStartDate: {
        type: String,
        required: true
    },
    brewEndDate: {
        type: String,
        required: false
    },
    brewingModifications: {
        type: String,
        required: false
    },
    ingredientModifications: {
        type: [IngredientSchema],
        required: false
    },
    tastingNotes: {
        type: String,
        required: false
    }
});

const BrewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    subType: {
        type: String,
        required: false
    },
    batches: {
        type: [BatchSchema],
        required: true
    },
    ingredients: {
        type: [IngredientSchema],
        required: false
    },
    description: {
        type: String,
        required: false
    },
    brewingInstructions: {
        type: String,
        required: false
    },
    userID: {
        type: String, 
        required: true
    },
    userName: {
        type: String, 
        required: true
    },
    userEmail: {
        type: String, 
        required: true
    }

});

// If brew model has already been created, export it, else create then export it
let Brew
try {
    Brew = mongoose.model("Brew")
} catch (error) {
    Brew = mongoose.model("Brew", BrewSchema)
}

export default Brew
