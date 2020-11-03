import mongoose from 'mongoose';

import { auditingMixin } from './schemaMixins';
import { Node } from './node';

const noteMapperNodeSchema = new mongoose.Schema({
  ...auditingMixin,
  mappings: [
    {
      from: { type: Number, required: true, min: 0, max: 127 },
      to: { type: Number, required: true, min: 0, max: 127 },
    },
  ],
});

export const NoteMapperNode =
  mongoose.models.NoteMapperNode ||
  Node.discriminator('NoteMapperNode', noteMapperNodeSchema);
