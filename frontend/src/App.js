import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInpage";
import SignUpPage from "./pages/SignUpPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/sign-in" element={<SignInPage/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />

        <Route path="/user-dashboard" element={<SignUpPage/>} />
        <Route path="/user-investments" element={<SignUpPage/>} />
        <Route path="/user-assets" element={<SignUpPage/>} />
        <Route path="/user-tools" element={<SignUpPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
