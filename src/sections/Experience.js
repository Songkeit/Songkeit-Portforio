import { UseNav } from "../hook/useNav"

const Experience = () =>{
    const experienceRef = UseNav("Experience")

    return(
        <section ref={experienceRef} id="ExperiencePage">
            <h1>Experience Page</h1>
            <p>
                Hi thid is Experience page
            </p>
        </section>
    )
}

export default Experience