import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>let me help you with this . this is the place where you can find the solution for most of your questions</p>

        <nav>
            <NavLink to="faq">view the FAQ</NavLink>
            <NavLink to="contact">Contact US</NavLink>
            
        </nav>
        <Outlet />
    </div>
  )
}

export default HelpLayout
