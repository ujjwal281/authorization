import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";
import Footer from './components/footer/index'

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <div className=" h-screen ">
      <Header />
      <div className="w-full flex flex-col justify-center items-center">{routesElement}</div>
      <Footer/>
      </div>
    </AuthProvider>
  );
}

export default App;
