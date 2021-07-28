import "./App.css";
import { RedocStandalone } from "redoc";

function App() {
  return (
    <RedocStandalone
      specUrl="./swagger.json"
      options={{
        nativeScrollbars: false,
        theme: { colors: { primary: { main: "rgb(9, 60, 251)" } } },
      }}
    />
  );
}

export default App;
