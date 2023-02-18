const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/euromil.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const euromilProto = grpc.loadPackageDefinition(packageDefinition).euromil;

function registerEuroMil(call, callback) {
  const key = call.request.key;
  const checkId = call.request.checkid;
  const success = true; // implement your registration logic here
  const message = success ? 'Registration successful' : 'Registration failed';
  callback(null, { message });
}

function main() {
  const server = new grpc.Server();
  server.addService(euromilProto.Euromil.service, { registerEuroMil });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('Server started at http://localhost:50051');
}

main();
