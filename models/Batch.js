import mongoose from 'mongoose'
import Ingredient from './Ingredients'

const { String, Date } = mongoose.Schema.Types;

const BatchSchema = new mongoose.Schema({
    brewStartDate: {
        type: Date,
        required: true
    },
    brewEndDate: {
        type: Date,
        required: false
    },
    brewingModifications: {
        type: String,
        required: false
    },
    ingredientModifications: {
        type: [Ingredient]
    },
    tastingNotes: {
        type: String,
        required: false
    }
});

export default mongoose.models.Batch || mongoose.model("Batch", BatchSchema);