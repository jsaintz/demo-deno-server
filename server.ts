// ES Modules
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

//Cria o Server
const server = serve({ port: 8000 });

console.log("http://localhost:8000/");

//Async iterador para atender solicitações do servidor 
for await (const req of server) {
  req.respond({ body: "<h1>Hello World\n</h1>"});
}