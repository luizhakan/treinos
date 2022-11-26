import React from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBwo3RRG5N6rPG94vJIhXluDWvhEUjNiYY",
  authDomain: "react-firebase-treino.firebaseapp.com",
  projectId: "react-firebase-treino",
});

interface IUser {
  name: string;
  idade: number;
  email: string;
}

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [idade, setIdade] = React.useState(0);
  const [users, setUsers] = React.useState<any[]>([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");
  React.useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      const dado = data.docs.map((doc) => doc.data());
      setUsers(dado);
    };
    getUsers();
  }, [users]);

  const handleAddUser = async () => {
    const user = await addDoc(userCollectionRef, {
      name,
      email,
      idade,
      id: users.length + 1,
    });
    console.log(user);
  };

  const handleDeleteUser = async (id: any) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div>
      <h1>Hello, Firebase!</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        required
        placeholder="Nome"
      />
      <input
        value={idade}
        onChange={(e) => setIdade(Number(e.target.value))}
        type="number"
        required
        placeholder="Idade"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        required
      />
      <button onClick={handleAddUser}>Enviar</button>
      <hr />
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.idade} anos - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
