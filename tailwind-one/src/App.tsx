import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="flex flex-col bg-black w-screen h-screen sm md lg xl">
      <Header />
      <Main />
    </div>
  );
}
