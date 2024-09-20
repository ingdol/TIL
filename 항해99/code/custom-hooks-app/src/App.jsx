import useInput from "./hooks/useInput";

function App() {
  const [title, onChangeTitleHandler] = useInput();
  const [body, onChangeBodyHandler] = useInput();

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChangeTitleHandler}
      />
      <input
        type="text"
        name="body"
        value={body}
        onChange={onChangeBodyHandler}
      />
    </div>
  );
}

export default App;
