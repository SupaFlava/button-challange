import FormContainer from "./comopent/Form/FormContainer";

const options = [
  { label: "Location 1", value: 1 },

  { label: "Location 2", value: 2 },

  { label: "Location 3", value: 3 },

  { label: "Location 4", value: 4 },

  { label: "Location 5", value: 5 },

  { label: "Location 6", value: 6 },
];
function App() {
  return (
    <div className="App">
      <FormContainer variant={""}>{options}</FormContainer>
    </div>
  );
}

export default App;
