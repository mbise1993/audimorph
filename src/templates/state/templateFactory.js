import { nodeFactory } from '../../editor/state/nodeFactory';
import { nodeTypes } from '../../editor/state/nodeTypes';
import { v4 as uuid } from 'uuid';

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
