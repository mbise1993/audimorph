import Amplify, { withSSRContext } from 'aws-amplify';

import awsExports from '../../aws-exports';
import { MongoDb } from '../database/mongodb';

Amplify.configure({
  ...awsExports,
  ssr: true,
});

export function createHandler(handlersByMethod) {
  return async (req, res) => {
    const handler = handlersByMethod[req.method];
    if (!handler) {
      res.setHeader('Allow', Object.keys(handlersByMethod));
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }

    const { Auth } = withSSRContext({ req });

    let user;
    try {
      user = await Auth.currentAuthenticatedUser();
    } catch (e) {
      // No user logged in
    }

    await MongoDb.connect();

    const context = {
      req,
      res,
      user,
    };

    await handler(context);
  };
}
