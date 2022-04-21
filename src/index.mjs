import express, { request, response } from "express";

const app = express();
const PORT = 3000;

const tasks = [
    {
      id: 0,
      description: "comprar pan",
      done: false
    },
    {
      id: 1,
      description: "comprar chorizo",
      done: false
    },
    {
      id: 2,
      description: "comprar queso",
      done: false
    },
    {
      id: 3,
      description: "hacer bocadillo",
      done: false
    }
];

app.use(express.json())

app.get("/api/v0.0/tasks/", (request, response)=>{
    console.log(tasks)
    response.json(tasks);
})

app.post("/api/v0.0/task/", (request, response)=>{
    console.log(request.body);
    tasks.push(request.body);
    response.sendStatus(201);
})

app.put("/api/v0.0/tasks/", (request, response)=>{
  

})

app.delete("/api/v0.0/tasks/", (request, response)=>{
  

})

/*
app.get("/hello/", (request, response)=>{ 
    console.log(request);
    response.json({content: "Hola, qué tal?"});
})

app.get("/ok/", (request, response)=>{ 
  response.sendStatus(404);
})

*/
app.listen(PORT,()=>{
    console.log(`Servidor Express funcionando en puerto ${PORT}`);
})

