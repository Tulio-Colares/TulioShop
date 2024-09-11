const mongoose = require('mongoose')

// Connecting to MongoDB
const mongoConnect = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Conectado ao MongoDB');
    })
    .catch(err => {
      console.error('Erro ao conectar ao MongoDB', err);
    });
}

module.exports = mongoConnect;


