import mongoose  from 'mongoose';

const Connection = async () => {
    const URL = `mongodb+srv://mishraprince1023:5566@cluster0.jynybxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;