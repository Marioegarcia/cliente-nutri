// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin Pages
import AdminHome from "../pages/Admin";
import Registro from "../pages/Admin/Registro";
import LoginPage from "../pages/Admin/Login/LoginPage";
import AdminUsers from "../pages/Admin/Users";
import AdminPaciente from "../pages/Admin/Paciente";
import AdminMenuWeb from "../pages/Admin/MenuWeb";
import AdminCategoria from "../pages/Admin/Categoria";
//import AdminCourses from "../pages/Admin/Courses";
import AdminBlog from "../pages/Admin/Blog";
import AdminCrearDieta from "../pages/Admin/CrearDieta/CrearDieta";
import AdminComida from "../components/Admin/Comida";



// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Blog from "../pages/Blog";

// Other
import Error404 from "../pages/Error404";



const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true
      },
      {
        path: "/admin/login",
        component: LoginPage,
        exact: true
      },
      {
        path: "/admin/registro",
        component: Registro,
        exact: true
      },
      {
        path: "/admin/pacientes",
        component: AdminUsers,
        exact: true
      },
      {
        path: "/admin/paciente/:id",
        component: AdminPaciente,
        exact: true
      },
      {
        path: "/admin/new-dieta/:id",
        component: AdminCrearDieta,
        exact: true
      },
      {
        path: "/admin/categorias",
        component: AdminMenuWeb,
        exact: true
      },
      {
        path: "/admin/categoria/:id",
        component: AdminCategoria,
        exact: true
      },
      {
        path: "/admin/comidas",
        component: AdminComida,
        exact: true
      },
      {
        component: Error404
      }
    ]
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true
      },
      {
        path: "/contact",
        component: Contact,
        exact: true
      },
      {
        path: "/courses",
        component: Courses,
        exact: true
      },
      {
        path: "/blog",
        component: Blog,
        exact: true
      },
      {
        path: "/blog/:url",
        component: Blog,
        exact: true
      },
      {
        component: Error404
      }
    ]
  }
];

export default routes;
