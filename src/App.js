import "./App.css";
import { RedocStandalone } from "redoc";

function App() {
  return (
    <RedocStandalone
      specUrl="./swagger.json"
      options={{
        nativeScrollbars: false,
        theme: {
          typography:{ 
            fontFamily:"Roboto"
          },
          colors: {
            primary: { main: "#00c6ff" },
            responses: {
              success: {
                backgroundColor: "#a8ff78",
                color: "#000",
               
              },
              error: {
                backgroundColor: "#ee0979",
                color: "#FFF",
              },
            },
          },
        },
      }}
    />
  );
}

export default App;
