import mongoose from 'mongoose';

import { auditingMixin } from './schemaMixins';

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  ownerId: { type: String, required: true },
  private: { type: Boolean, default: false },
  ...auditingMixin,
  nodes: [mongoose.Schema.Types.Mixed],
});

export const Template =
  mongoose.models.Template || mongoose.model('Template', templateSchema);
