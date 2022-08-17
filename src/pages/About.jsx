//styles
import '../styles/AboutMe.css'
//Skills
import Skills from '../components/Skills'

export default function About(){
    return(
    <div className='about-contain'>
        <div className='container-2'>
            <div className='about-me'>
                <h1 className='title'>About Me</h1>
                <div className='text-container'>
                <h5 className='presentation'>Hello I'm Miguel Angel Bedoya Vargas</h5>
                <h5 className='presentation'>Full-Stack Developer</h5>
                <p className='text'>I consider myself a communicative, sociable, respectful and responsible <br/> person with what is assigned to me.</p>
                <p>I respect the opinions of my colleagues and the orders of my superiors <br/> and I am punctual with what I am ordered to do. </p>
                <h5 className='presentation'>Skills</h5>
                <p> I handle technologies such as <span className='front-tec'> Html, Css, Js, React, Redux, Vtex and Css frameworks.</span> </p>
                <p> On the other hand, I handle  <span className='back-tec'> Node, Express, Sequelize, Sql, PostgresQl, Git and Jest</span> </p>
                <p>All these technologies are used with best practices, I am currently improving my <br/> English and my skills. </p>
                <h5 className='presentation'>Studies</h5>
                <p>I am finishing the <a style={{color: "rgb(0, 60, 255)"}} href='https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_COL_BRAND&utm_content=Brand&gclid=Cj0KCQjwgO2XBhCaARIsANrW2X1nHk8Ebl25ESOmMBojdlDA_GW55Z6xuOmXrVKEPSC2p9pJbp2QrPoaApeDEALw_wcB'>Henry's</a> Bootcamp, where most of the technologies I know <br/> i learned  in the bootcamp, the rest I learned on my own.</p>
                </div>
            </div>
            <div className='skills'>
                <h2 className='skills-title'>Skills <span className='front-end'>Front-end</span> / <span className='back-end'>Back-end</span> </h2>
                <Skills/>
            </div>
            </div>
        </div>
    )
}