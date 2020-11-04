import { Template } from '../../database/template';

export async function postTemplate(req, res) {
  const template = await Template.create(req.body);
  res.status(200).json(template);
}
