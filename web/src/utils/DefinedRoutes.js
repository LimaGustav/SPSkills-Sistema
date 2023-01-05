import Competitors from "../pages/competitors/Competitors";
import Expenses from "../pages/expenses/Expenses";
import ForgotPassword from "../pages/login/ForgotPassword";
import Login from "../pages/login/Login";
import NewPassword from "../pages/login/NewPassword";
import SendMail from "../pages/login/SendMail";

const DefinedRoutes =  {
  login: {
    path: '/',
    element: <Login />
  },
  recover: {
    path: '/perdiminhasenha',
    element: <ForgotPassword />
  },
  recoverMail: {
    path: '/recuperarsenha',
    element: <SendMail />
  },
  changePassword: {
    path: '/mudarsenha',
    element: <NewPassword />
  },
  competitors: {
    path: '/competidores',
    element: <Competitors />
  },
  expenses: {
    path: '/despesas',
    element: <Expenses />
  },
  profile: {
    path: '/perfil',
    element: <Competitors />
  }
}

export default DefinedRoutes