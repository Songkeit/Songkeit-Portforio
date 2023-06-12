
import { UseNav } from "../hook/useNav"
import self from '../image/picture.jpg'
import '../styles/Home.css'

const Home = () =>{

    const homeRef = UseNav("Home")
    const clickAboutPage = ()=>{
        document.getElementById("AboutPage").scrollIntoView({behavior:"smooth"})
    }
    return(
        <section ref ={homeRef} id="HomePage" className='container_header' >
            <div className='container_header'>
               <div className="textName">
                    <h1>Home Page</h1>
                    <p>
                        Hi thid is home page Edit
                    </p>
                   
                        <button onClick={clickAboutPage} className="buttomAbout">
                            <span className="circle">
                                <span className="icon arrow"></span>
                            </span>
                        <span className="text">About</span>
                    </button> 
                   
                  
                    
                   
                    {/* <button className ='btnToAbout' onClick={clickAboutPage}>click About</button> */}
               </div>
               <div>
                    <img src={self} alt="" className="image"/>
                    
               </div>
             
            </div> 
        </section>
    )
}

export default Home