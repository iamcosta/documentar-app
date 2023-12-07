import { PrimeReactProvider } from "primereact/api";
import { ReactQueryProvider } from "./components/ReactQueryProvider";
import { MainRouter } from "./routes/MainRouter";

function App() {
  return (
    <PrimeReactProvider>
      <ReactQueryProvider>
        <MainRouter />
      </ReactQueryProvider>
    </PrimeReactProvider>
  );
}

export default App;
