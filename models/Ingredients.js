import mongoose from 'mongoose'

const { String, Number } = mongoose.Schema.Types;

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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

export default mongoose.models.Ingredient || mongoose.model("Batch", IngredientSchema);