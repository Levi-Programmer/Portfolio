// react-router-dom
import {NavLink} from 'react-router-dom'
//styles
import '../styles/navBar.css'
//Logo
import Logo from '../assets/icono.png'


const NavBar = () => {
    return(
        <div className='Navbar'>
            <div className='logo-co'>
                <img src={Logo} className='logo'/>
                <h5 className='name'>Miguel Angel</h5>
            </div>
            
            <div className='nav-links'>
            <NavLink to='/' className='nav-link'> Home </NavLink>
            <NavLink to='/about'  className='nav-link'> About </NavLink>
            <NavLink to='/contact'  className='nav-link'> Contact </NavLink>
            </div>
        </div>
    )
}


export default NavBar;