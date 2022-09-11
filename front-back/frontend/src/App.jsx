import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/").then((response) =>
    response.json().then((data) => {
      console.log(data);
      setUser(data);
    })
  );
  }, [])

  return (
    <>
      <h1>wow bb</h1>
      <h2>evoque bege</h2>
      {
        user.map((user) => {
          return (
            <div key={user.id}>
              <h3>Nome : {user.nome}</h3>
              <h3>Idade: {user.idade}</h3>
            </div>
          )
        })
      }
      <h2>Api criada e chamada com sucesso!</h2>
    </>
  );
}

export default App;
