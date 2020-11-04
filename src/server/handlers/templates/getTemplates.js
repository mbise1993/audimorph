import { Template } from '../../database/template';

export async function getTemplates(context) {
  const { searchTerm, onlyMine } = context.req.query;

  const query = Template.find().where('private', false);

  if (searchTerm && searchTerm.length > 0) {
    const searchRegex = new RegExp(searchTerm, 'i');
    query.or([{ name: searchRegex }, { description: searchRegex }]);
  }

  if (onlyMine && onlyMine === 'true' && context.user) {
    const { id: userId } = context.user.attributes;
    query.and([{ ownerId: userId }]);
  }

  const templates = await query.exec();
  context.res.status(200).json(templates);
}
