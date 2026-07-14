/* Imports */
import express from "express";
import employees from "./db/employees.js";
/* Variable Defenitions */
/* App Function */
const app = express();
/*app.uses [is that the correct term?]*/
app.get("/", (req, res, next) => {
  res.send("Hello employees!");
});
app.get("/employees", (req, res, next) => {
  res.send(employees);
});
app.get("/employees/random", (req, res, next) => {
  const randomEmployee = Math.floor(Math.random() * employees.length);
  const employee = employees[randomEmployee];
  res.send(employee);
});
app.get("/employees/:id", (req, res, next) => {
  const { id } = req.params;
  const employee = employees.find((g) => {
    return g.id === +id;
  });
  if (!employee) {
    res.status(404).send("not an employee");
  }
  res.send(employee);
});

export default app;

/* Ignore */
/* Initalizing function here */
/* nvm? it appears there is already one in server.js? */
/* const init = () => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};
init(); */
