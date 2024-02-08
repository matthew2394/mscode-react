import { useEffect } from 'react';
import '../styles/Home.css';
import rightLogo from '../assets/MsCode.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import javaScript from '../assets/js.png'
import typeScript from '../assets/typescript.png';
import vueJs from '../assets/vuejs.png';
import react from '../assets/react432.png';
import tailwind from '../assets/tailwindcss.jpg';
import nextjs from '../assets/nextjs2.png';
import html from '../html432.png';
import css3 from '../assets/css3.png';
import nuxt from '../assets/nuxtjs.png';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);



    return (

        <section id="home">
            <div className="home">
                <div className="prod-left l1">
                    <div className="text-container">
                        <p style={{ color: '#D9D9D9;' }} className="text" data-aos="fade-right">
                            Witaj, jestem <span>Mateusz</span>
                        </p>
                        <p data-aos="fade-right" className="prod-head-sub">
                            Pochodzę z okolic Łodzi. Byłem zawodnikiem koszykówki.
                            Aktualnie chodzę na treningi boksu i siłownię. Wolny czas spędzam przed komputerem, ucząc się nowych
                            technologii oraz grając w gry. Kształtuję się jako technik informatyk i dążę do zostania programistą.
                            Poniżej przedstawiam moje umiejętności.
                        </p>
                        <div data-aos="fade-right" className='SkillsContainer'>
                            <div className='SkillsCard'>
                                <img src={javaScript} alt="Icon" className="icon" />
                            </div>
                            <div className='SkillsCard'>
                                <img src={typeScript} alt="Icon" className="icon" />
                            </div>
                            <div className='SkillsCard'>
                                <img src={vueJs} alt="Icon" className="icon" />
                            </div>
                            <div className='SkillsCard'>
                                <img src={react} alt="Icon" className="icon" />
                            </div>
                            
                            <div className='SkillsCard'>
                                <img src={nuxt} alt="Icon" className="icon" />
                            </div>
                        </div>
                        <div data-aos="fade-right" className='SkillsContainer'>
                            <div className='SkillsCard'>
                                <img src={tailwind} alt="Icon" className="icon" />
                            </div>
                            <div className='SkillsCard'>
                                <img src={nextjs} alt="Icon" className="icon" />
                            </div>
                            <div className='SkillsCard'>
                                <img src={html} alt="Icon" className="icon" />
                            </div>
                            <div className='SkillsCard'>
                                <img src={css3} alt="Icon" className="icon" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="prod-logo" data-aos="fade-left">
                    <img src={rightLogo} alt="Right Logo" />
                </div>
                <br />
            </div>
        </section>
    );
};

export default Home;