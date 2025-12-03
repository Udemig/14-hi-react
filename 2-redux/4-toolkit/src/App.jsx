import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./pages/crud";
import Counter from "./pages/counter";
import Header from "./components/header";
import Footer from "./components/footer";
import { Stack } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Stack className="vh-100 d-flex flex-column">
        <Header />

        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Crud />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </main>

        <Footer />
      </Stack>
    </BrowserRouter>
  );
};

export default App;
