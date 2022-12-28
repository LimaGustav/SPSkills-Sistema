import { Container, Nav, Navbar } from "react-bootstrap"
import { BSLink } from "../utils/BetterBS"
import DefinedRoutes from "../utils/DefinedRoutes"

export default function Header() {


    return <Navbar className="header">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav>
            <BSLink to={DefinedRoutes.expenses.path}>Despesas</BSLink>
            <BSLink to={DefinedRoutes.competitors.path}>Competidores</BSLink>
            <BSLink to={DefinedRoutes.profile.path}></BSLink>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
}