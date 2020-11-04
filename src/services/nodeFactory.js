import { v4 as uuid } from 'uuid';

import { nodeTypes } from '../state/nodeTypes';

class NodeFactory {
  createNodeFromType(typeId) {
    switch (typeId) {
      case nodeTypes.noteMapper.id:
        return {
          id: uuid(),
          name: nodeTypes.noteMapper.name,
          description: 'Re-map notes',
        };
      case nodeTypes.velocity.id:
        return {
          id: uuid(),
          name: nodeTypes.velocity.name,
          description: 'Adjust note velocities',
        };
      case nodeTypes.quantize.id:
        return {
          id: uuid(),
          name: nodeTypes.quantize.name,
          description: 'Quantize notes',
        };
    }
  }
}

export const nodeFactory = new NodeFactory();
