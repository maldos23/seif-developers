import "./App.css";
import { RedocStandalone } from "redoc";

function App() {
  return (
    <RedocStandalone
      specUrl="./swagger.json"
      options={{
        nativeScrollbars: false,
        theme: { colors: { primary: { main: "#0072ff" } } },
      }}
    />
  );
}

export default App;
