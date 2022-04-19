import Welcome from "./components/Welcome.jsx";
import AtivarLasers from "./components/AtivarLasers.jsx";
import TextArea from "./components/TextArea.jsx";

function App() {
  return (
    <>
      <Welcome nome="Luiz Hakan" />
      <button onClick={AtivarLasers}>Binário</button>
      <TextArea type="date" name="textarea" placeholder="User"/>
    </>
  );
}

export default App;
