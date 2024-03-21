import { Schema, model } from 'mongoose';

const transactionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: String,
});


export default model('Transaction', transactionSchema);
