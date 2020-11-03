import { MongoDb, Template } from '../../src/database';

async function searchTemplates(req, res) {
  const filter = {
    private: false,
  };

  const searchTerm = req.query.searchTerm;
  if (searchTerm && searchTerm.length > 0) {
    filter.name = searchTerm;
  }

  const templates = await Template.find(filter);
  console.log(templates);
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
