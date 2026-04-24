import { createBrowserRouter, Outlet } from "react-router";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function Root() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
