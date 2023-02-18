const grpc = require('grpc');

const euroMilService = grpc.load('euromil.proto').euromil.Euromil;


function registerEuroMil(call, callback) {
  const key = call.request.key;
  const checkId = call.request.checkid;

  // TODO: implementar a lógica de registro do Euromilhões

  const message = 'Aposta registrada com sucesso';

  callback(null, { message });
}

const server = new grpc.Server();
server.addService(euroMilService, { RegisterEuroMil: registerEuroMil });
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
console.log('Servidor gRPC iniciado na porta 50051');
server.start();
