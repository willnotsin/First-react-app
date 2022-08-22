import "./App.css";
import Container from "./components/Container";
import Todo from "./components/Todo";
export default function App() {
  return (
    <div className="App">
      <Container>
        <div>
          {" "}
          <h1>My Todos</h1>
          <Todo text="Learn react"/>
          <Todo />
        </div>
      </Container>

    </div>
   
  );
}
