import { MongoDb } from '../database/mongodb';

export function createHandler(handlersByMethod) {
  return async (req, res) => {
    const handler = handlersByMethod[req.method];
    if (!handler) {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }

    await MongoDb.connect();
    await handler(req, res);
  };
}
