import { useEffect } from 'react';
import '../styles/NavBar.css'
import rightLogo from '../assets/MsCode.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        const navigation = document.getElementById("nav") as HTMLElement;
        const menu = document.getElementById("menu") as HTMLElement;

        const handleClick = () => {
            navigation.style.setProperty("--childenNumber", navigation.children.length.toString());
            navigation.classList.toggle("active");
            menu.classList.toggle("active");
        };

        menu.addEventListener("click", handleClick);

        return () => {
            menu.removeEventListener("click", handleClick);
        };
    }, []);
    return (
        <nav>
            <div>
                <img data-aos="fade-down" src={rightLogo} className="logo" alt="Logo" />
            </div>
            <div>
                <ul id="nav">
                    <li className='active' data-aos="fade-down"><a href="./Home">Strona Główna</a></li>
                    <li data-aos="fade-down"><a href="/">Umiejętności</a></li>
                </ul>
            </div>
            <div className="menu" id="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default NavBar;
