import { Template } from '../../database/template';

export async function getTemplates(req, res) {
  const query = Template.find().where('private', false);

  const searchTerm = req.query.searchTerm;
  if (searchTerm && searchTerm.length > 0) {
    const searchRegex = new RegExp(searchTerm, 'i');
    query.or([{ name: searchRegex }, { description: searchRegex }]);
  }

  const templates = await query.exec();
  res.status(200).json(templates);
}
