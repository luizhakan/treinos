import "./App.css";
import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  // carregar todos na página
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + "/todos")
        .then((res) => res.json().then((data) => data))
        .catch((err) => console.log(err));

      setLoading(false);

      setTodos(res);
    };

    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => [...prevState, todo]);

    setTitle("");
    setTime("");
  };

  const handleDelete = async (id) => {
    await fetch(API + "/todos", {
      method: "DELETE",
    });

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleEdit = async (todo) => {
    todo.done = !todo.done;

    const data = await fetch(API + "/todos", +todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) =>
      prevState.map((t) => (t.id === data.id ? (t = data) : t))
    );
  };

  if (loading) {
    return (
      <div className="d-flex align-items-center">
        <strong>Carregando...</strong>
        <div
          className="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }

  return (
    <div className="card-body container">

      <div className="card-body container">
        <h1 id="titulo">Lista de Tarefas</h1>
        <h2>Insira a sua próxima tarefa!</h2>
        <form className="form-floating" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingInputValue"
              type="text"
              name="title"
              placeholder="Título da tarefa"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
            <label className="floatingInputValue" htmlFor="title">
              O que você vai fazer?
            </label>
          </div>
          <div className="form-floating">
            <input
              className="form-control"
              id="floatingInputValue"
              type="text"
              name="name"
              placeholder="Tempo estimado (em horas)"
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
            <label className="floatingInputValue" htmlFor="time">
              Duração{" "}
            </label>
          </div>
          <input
            className="btn btn-primary"
            id="botao"
            type="submit"
            value="Enviar"
          />
        </form>
      </div>

      <div className="card-body">
        <h2 className="alert alert-warning">Lista de Tarefas</h2>
        {todos.length === 0 && <p>Não há tarefas</p>}
        {todos.map((todo) => (
          <div className="alert alert-dark" role="alert" key={todo.id}>
            <h3 className={todo.done ? "card-title" : ""}>{todo.title}</h3>
            <p className="card-text">Duração: {todo.time}h</p>
            <div className="actions">
              <span onClick={() => handleEdit(todo)}>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
              <BsTrash onClick={() => handleDelete(todo.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
