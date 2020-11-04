import { v4 as uuid } from 'uuid';

import { nodeFactory } from './nodeFactory';
import { nodeTypes } from '../state/nodeTypes';

class TemplateFactory {
  createDefaultTemplate() {
    return {
      id: uuid(),
      name: 'Default',
      description: 'Default template',
      nodes: [nodeFactory.createNodeFromType(nodeTypes.noteMapper.id)],
    };
  }
}

export const templateFactory = new TemplateFactory();
