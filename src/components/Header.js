import { useContext } from 'react'
import styles from '../styles/Header.css'
import { NavContext } from '../context/NavContext'

const Header = ()=>{
    const{ activeLinkId } = useContext(NavContext)
    console.log(activeLinkId);
    const navLinks = ["Home","About","Skills","Education","Experience"]

    const LogoDefault = ()=>{
        document.getElementById("HomePage").scrollIntoView({behavior:"smooth"})

    }
    const renderNav = (context) =>{
        const navLinkPage = () =>{
            const IDSection = context+"Page"
            document.getElementById(IDSection).scrollIntoView({behavior:"smooth"})
        }
        return(
            <ul key={context}>
                <li>
                    <button 
                    onClick={navLinkPage}
                    className={activeLinkId === context ? 'activeClass' : ""}
                    > 
                    {context} </button>
                </li>
            </ul>
        )
    }

    return(
        <header className='header'>
            <div className='container'>
                <div className='navContainer'>
                    <h1 onClick={LogoDefault}> SONGKEIT</h1>
                    <nav>
                        {navLinks.map(element=>renderNav(element))}
                    </nav>
                </div>

            </div>
        </header>
    )
}
export default Header