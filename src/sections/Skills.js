import { UseNav } from "../hook/useNav"

const Skills = () =>{
    const skillsRef = UseNav("Skills")

    return(
        <section ref={skillsRef} id="SkillsPage">
            <h1>Skills Page</h1>
            <p>
                Hi thid is Skills page
            </p>
        </section>
    )
}

export default Skills