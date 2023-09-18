import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }
    // 데이터 베이스 저장
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      const mongoURI = process.env.REACT_APP_MONGO_URI;

      client = await MongoClient.connect(mongoURI);
    } catch (error) {
      res.status(500).json({ message: '데이터베이스에 연결 실패' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: '메세지 저장 실패' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
