import express from "express";
//import { response } from "express";

const app = express();
const PORT = 3000;

app.get("/hello/", (request, response)=>{ 
    console.log(request);
    response.json({content: "Hola, qué tal?"});
})

app.get("/ok/", (request, response)=>{ 
  response.sendStatus(404);
})

app.listen(PORT,()=>{
    console.log(`Servidor Express funcionando en puerto ${PORT}`);
})

