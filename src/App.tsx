import "./styles/global.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Product from "./pages/product/Product";

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
          index: true,
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "users/:id",
          element: <User />,
        },
        {
          path: "products/:id",
          element: <Product />,
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
