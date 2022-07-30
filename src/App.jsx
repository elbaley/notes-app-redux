import styled from "styled-components";
import NoteInput from "./components/NoteInput";

function App() {
  return (
    <main>
      <NoteInput />
    </main>
  );
}

const Wrapper = styled.main`
  .add-note {
    max-width: 450px;
    padding: 1rem;
    margin: 1rem auto;
    border: 1px solid grey;
    border-radius: 0.75rem;
    box-shadow: var(--shadow-2);
    height: auto;
    position: relative;
  }
  textarea {
    width: 100%;
    resize: none;
    font-size: 1rem;
    background: none;
    border: none;
  }
  textarea:focus {
    outline: none;
  }
  .note-color {
    background: var(--bg-color);
    display: flex;
    position: absolute;
    padding: 0.25rem;
    left: 1rem;
    bottom: -1.5rem;
    border: 0.1rem solid black;
    border-radius: 0.2rem;
    box-shadow: var(--shadow-2);
  }
  .color-option {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
    border: 1px solid transparent;
  }
  .color-option:hover {
    border: 1px solid white;
  }
  .red {
    background: #5c2b29;
  }
  .yellow {
    background: #f9b219;
  }
  .orange {
    background: #ff8801;
  }
  .green {
    background: #05c270;
  }
`;

export default App;
