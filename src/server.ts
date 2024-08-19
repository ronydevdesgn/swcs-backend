import Fastify from "fastify";
const app = Fastify({
  logger: true,
});

// Declaração de rota
app.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

// Tudo OK! servidor ligado...!
app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`Servidor está agora ouvindo a porta 3000`);
});
