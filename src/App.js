import { AllRoute } from "./routes/AllRoute";
import { Footer, Header } from "./components";
import { Email } from "./pages/Home/components/email"
import "./App.css";
import "./output.css";

function App() {

  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoute />
      <Footer />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to My Email App</h1>
        <div className="mb-4">
          <Email />
        </div>
        <p className="text-gray-700 text-center">Enter your email address to get started.</p>
      </div>
    </div>
    </div>
  );
}

export default App;
