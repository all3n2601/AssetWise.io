import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInpage";
import SignUpPage from "./pages/SignUpPage";
import ContactUsPage from "./pages/ContactUsPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import AboutUsPage from "./pages/AboutUsPage";
import RetirementCalculator from "./components/client/RetirementCalculator";
import UserInvestmentPage from "./pages/UserInvestmentPage";
import UserDataPage from "./pages/UserDataPage";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/sign-in" element={<SignInPage/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />

        <Route path="/user-dashboard" element={<UserDashboardPage/>} />
        <Route path="/user-investments" element={<UserInvestmentPage/>} />
        <Route path="/user-assets" element={<SignUpPage/>} />
        <Route path="/user-tools" element={<RetirementCalculator/>} />
        <Route path="/user-data" element={<UserDataPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
