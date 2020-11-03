import { createHandler } from '../../server/handlers/createHandler';
import { getTemplates } from '../../server/handlers/templates/getTemplates';

export default createHandler({
  GET: getTemplates,
});
