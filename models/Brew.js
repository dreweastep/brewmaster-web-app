import mongoose from 'mongoose'
import Batch from './Batch'
import Ingredient from './Ingredients'

const { String } = mongoose.Schema.Types;

const BrewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    subtype: {
        type: String,
        required: false
    },
    batches: {
        type: [Batch],
        required: true
    },
    ingredients: {
        type: [Ingredient],
        required: false
    },
    description: {
        type: String,
        required: false
    },
    brewingInstructions: {
        type: String,
        required: false
    }
});

export default mongoose.models.Brew || mongoose.model("Brew", BrewSchema);