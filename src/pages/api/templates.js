import { createHandler } from '../../../server/handlers/createHandler';
import { getTemplates } from '../../../server/handlers/templates/getTemplates';
import { postTemplate } from '../../../server/handlers/templates/postTemplate';

export default createHandler({
  GET: getTemplates,
  POST: postTemplate,
});
