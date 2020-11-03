import { MongoDb, Template } from '../../server/database';

async function searchTemplates(req, res) {
  const query = Template.find().where('private', false);

  const searchTerm = req.query.searchTerm;
  if (searchTerm && searchTerm.length > 0) {
    const searchRegex = new RegExp(searchTerm, 'i');
    query.or([{ name: searchRegex }, { description: searchRegex }]);
  }

  const templates = await query.exec();
  res.status(200).json(templates);
}

export default async function handler(req, res) {
  await MongoDb.connect();

  switch (req.method) {
    case 'GET':
      await searchTemplates(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
