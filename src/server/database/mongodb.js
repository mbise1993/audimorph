import mongoose from 'mongoose';

const { DB_URL, DB_USER, DB_PASSWORD } = process.env;

if (!DB_URL) {
  throw new Error('No DB_URL found');
}

export class MongoDb {
  static async connect() {
    await mongoose.connect(DB_URL, {
      auth: {
        user: DB_USER,
        password: DB_PASSWORD,
      },
      authSource: 'admin',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}
