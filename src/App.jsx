import Button from "./components/Button";

function App() {
  return (
    <>
      <h1 title="heading">APP</h1>
      <Button id="mybtn" className="btn" title="my button">
        <img src="vite.svg" />
        <span>save me</span>
      </Button>
    </>
  );
}
export default App;
