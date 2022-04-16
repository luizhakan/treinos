fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Luiz Hakan" }),
})
  .then((resposta) => resposta.json())
  .then((data) => console.log(data));
