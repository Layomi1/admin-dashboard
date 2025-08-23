import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "./styles/global.scss";

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menu-container">
          <Sidebar />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          Component: Home,
          // loader: loadRootData,
        },
        {
          path: "users",
          Component: Users,
          // loader: loadRootData,
        },
        {
          path: "products",
          Component: Products,
          // loader: loadRootData,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
