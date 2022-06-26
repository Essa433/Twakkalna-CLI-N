import fastifyMongodb from '@fastify/mongodb';
import { server } from './server';

// server.register(require('@fastify/mongodb'), {
// 	// force to close the mongodb connection when app stopped
// 	// the default value is false
// 	forceClose: true,
	
// 	url: 'mongodb://mongo/mydb'
//   })
  
const port: any = process.env.PORT ?? process.env.$PORT ?? 3002;

server
.listen({
	port: port,
	host: '0.0.0.0'
})

.catch((err) => {
	server.log.error(err);
	process.exit(1);
});