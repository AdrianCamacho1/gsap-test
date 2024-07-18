import { AllRoute } from "./routes/AllRoute";
import { Footer, Header } from "./components";

import "./App.css";
import "./output.css";

function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
