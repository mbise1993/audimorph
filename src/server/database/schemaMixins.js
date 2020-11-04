export const auditingMixin = {
  version: { type: Number, required: true, default: 1 },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
};
