import mongoose from 'mongoose';

import { auditingMixin } from './schemaMixins';
import { Node } from './node';

const velocityNodeSchema = new mongoose.Schema({
  ...auditingMixin,
  modifyStatic: [
    {
      numberAmount: { type: Number },
      percentAmount: { type: Number },
      note: { type: Number, min: 0, max: 127 },
      allNotes: { type: Boolean },
    },
  ],
  randomize: [
    {
      minPercent: { type: Number, required: true, max: 0 },
      maxPercent: { type: Number, required: true, min: 0 },
      note: { type: Number, min: 0, max: 127 },
      allNotes: { type: Boolean },
    },
  ],
});

export const VelocityNode =
  mongoose.models.VelocityNode ||
  Node.discriminator('VelocityNode', velocityNodeSchema);
