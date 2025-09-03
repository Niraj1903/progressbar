import logo from "./logo.svg";
import ProgressBar from "./ProgressBar";
import "./App.css";

function App() {
  const bars = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <>
      <h1 className="font-bold flex justify-center mt-2">ProgressBar</h1>
      {bars.map((item) => (
        <ProgressBar key={item} progress={item} />
      ))}
    </>
  );
}

export default App;
