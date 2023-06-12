import { UseNav } from "../hook/useNav"
import SocialFollow from "../Social/SocialFollow"


const About = () =>{
    const aboutRef = UseNav("About")
    return(
        <section ref={aboutRef} id="AboutPage" className="secondary-section">
            <h1>About Page</h1>
            <p>
                Hi thid is About page
            </p>
            <SocialFollow/>
        </section>
    )
}

export default About