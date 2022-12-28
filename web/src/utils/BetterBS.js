// Objetivo: modificar o bootstrap e misturar com o react

import { Link } from "react-router-dom"

export const BSLink = (props) => {
    const classes = `nav-link${props.to === window.location.pathname ? ' active' : ''}`
    return <Link to={props.to} className={classes}>{props.children}</Link>
}