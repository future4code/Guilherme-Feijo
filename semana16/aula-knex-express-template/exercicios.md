### EXERCICIO 1

a) quando usamos o raw, as informações pedidas no request chegam no index 0 de um array com dois objetos. No index 1 chegam metadados.

b)
const searchActor = async (name: string): Promise<any> => {
const result = await connection.raw(` SELECT * FROM Actor WHERE name = "${name}" `)
return result
}

c)

const countActors = async (gender: string): Promise<any> => {
const result = await connection.raw(` SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}" `);
const count = result[0][0].count;
return count;
};

### EXERCICIO 2

a)

const updateActor = async (id: string, salary: number): Promise<any> => {
await connection("Actor")
.update({
salary: salary,
})
.where("id", id);
};

b)

const deleteActor = async (id: string): Promise<void> => {
await connection("Actor")
.delete()
.where("id", id);
};

c)

const avgSalary = async (gender: string): Promise<any> => {
const result = await connection("Actor")
.avg("salary as average")
.where({ gender });

return result[0].average;
};

### EXERCICIO 3

a)

app.get("/actor/:id", async (req: Request, res: Response) => {
try {
const id = req.params.id;
const actor = await getActorById(id);

      res.status(200).send(actor)
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }

});

b)

const countActors = async (gender: string) => {
const result = await connection("Actor").count().where({ gender: gender });
return result;
};

app.get("/actor", async (req: Request, res: Response) => {
try {
const count = await countActors(req.query.gender as string);
res.status(200).send({
quantity: count,
});
} catch (err: any) {
res.status(400).send({
message: err.message,
});
}
});

### EXERCICIO 4

a)

const updateSalary = async (id: string, salary: number) => {
await connection("Actor")
.update({
salary: salary,
})
.where({
id: id,
});
};

app.put("/actor", async (req: Request, res: Response) => {
try {
await updateSalary(req.body.id, req.body.salary);
res.status(200).send({
message: "Success",
});
} catch (err: any) {
res.status(400).send({
message: err.message,
});
}
});

b)

const deleteActor = async (id: string): Promise<void> => {
await connection("Actor")
.delete()
.where("id", id);
};

app.delete("/actor/:id", async (req: Request, res: Response) => {
try {
await deleteActor(req.params.id);
} catch (err: any) {
res.status(400).send({
message: err.message,
});
}
});
