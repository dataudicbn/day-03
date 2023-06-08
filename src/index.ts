import express from "express";

interface Employee {
  id: number;
  name: string;
  dob: string;
  employeeCode: string;
  department: string;
}

const employees: Employee[] = [];

const app = express();

app.use(express.json());

// List API
// GET /employees --> Get list employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// GET /employees?name=dat
app.get("/employee?name=xxx", (req, res) => {
  res.json(employees);
});

//GET /employees?page perpage
app.get("employees?page=1&limit=50")

