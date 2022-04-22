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

app.put("/api/v0.0/task/", (request, response)=>{
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex (
      item => item.id === updatedTask.id
    );
    tasks[oldTaskIdx] = updatedTask
    response.sendStatus(200);
})

app.delete("/api/v0.0/task/", (request, response)=>{
    const searchedTask = request.body;
    const deleteTaskIdx = tasks.findIndex (
      item => item.id === searchedTask.id
    );
    tasks.splice(deleteTaskIdx,1)
    response.sendStatus(200);
})

app.listen(PORT,()=>{
    console.log(`Servidor Express funcionando en puerto ${PORT}`);
})

