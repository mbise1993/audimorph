import mongoose from 'mongoose';

const nodeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, trim: true },
});

export const Node = mongoose.models.Node || mongoose.model('Node', nodeSchema);
