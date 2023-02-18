const grpc = require('grpc');

const euroMilService = grpc.load('euromil.proto').euromil.Euromil;

const client = new euroMilService('localhost:50051', grpc.credentials.createInsecure());

const key = '1234567890';
const checkId = 'a1b2c3d4e5';

client.RegisterEuroMil({ key, checkid: checkId }, (err, response) => {
  if (err) {
    console.error('Erro ao registrar aposta:', err);
  } else {
    console.log('Resposta do servidor:', response.message);
  }
});
