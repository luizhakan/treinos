import express from "express";
import cors from "cors";
import dados from "./dados.json" assert { type: "json" };

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json(dados);
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000...");
});
