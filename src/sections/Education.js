import { UseNav } from "../hook/useNav"
const Education = () =>{
    const educationRef = UseNav("Education")
    
    return(
        <section ref={educationRef} id="EducationPage" className="secondary-section">
            <h1>Education Page</h1>
            <p>
                Hi thid is Education page
            </p>
        </section>
    )
}

export default Education