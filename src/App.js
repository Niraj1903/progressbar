import logo from "./logo.svg";
import ProgressBar from "./ProgressBar";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="font-bold flex justify-center mt-2">ProgressBar</h1>
      <ProgressBar progress={70} />
    </>
  );
}

export default App;
