//images 
import banner from '../assets/programmer.jpg'
//img-projects
import apiMovies from '../assets/api-movies.png'
import RickMorty from '../assets/rick-and-morty.png'
import Tasks from '../assets/tasks.png'
import useContext from '../assets/use-context-desktop.png'
import alfaDesktop from '../assets/alfa-desktop.png'
import ReminDesktop from '../assets/remin-desktop.png'
//styles
import '../styles/Home.css'
//Card
import Card from '../components/Card'
import DevGroup from '../components/DevGroup'
//technologies-icons
import iconOne from '../assets/react-icon.png'
import iconTwo from '../assets/redux.png'
import iconThree from '../assets/bootstrap.png'
import iconFour from '../assets/material-ui-.png'
import iconFive from '../assets/postgresql.png'
import iconSix from '../assets/express.png'
import iconSeven from '../assets/sql.png'
import iconEight from '../assets/node.png'
import iconNine from '../assets/css.png'
import iconTen from '../assets/Vtex.png'
import iconEleven from '../assets/js.png'
import iconTwelve from '../assets/tp.png'
//Image Mobile
import apiMobile from '../assets/api-movies-mobile.png'
import RickMobile from '../assets/rickMobile.png'
import TasksMobile from '../assets/tasks-mobile.png'
import useContextMobile from '../assets/use-context-mobile.png'
import alfaMobile from '../assets/alfa-mobile.png'
import reminMobile from '../assets/remin-mobile.png'


export default function Home(){
    return(
        <div>
            <div className="container">
                <img src={banner} className='banner-1'/>
            </div>
            <div className='text-under'> 
                <h2 className="greeting">Hi I'm Miguel Angel </h2>
                <h2 className='profile'>Full-Stack Developer</h2>
                <p className='description'>Always with the best attitude to work and willing to learn. </p>
            </div>
            <div>
                <h1 className='briefcase'>Portfolio</h1>
                <Card name={'Api - Movies'} description={'Is a page where you consume an external api and bring series and movies, you can add to favorites and remove from favorites and also inspect it.'} image={apiMovies} iconOne={iconOne} iconTwo={iconTwo} iconThree={iconThree} repo='https://github.com/Levi-Programmer/api-movies' link='https://levi-programmer.github.io/api-movies/' linkTitle={'Link'} imageMobile={apiMobile} repoTitle={'Repository'} />
                <Card name={'Tasks'} description={'It is a PERN (Postgres, Express, React and Node) application, you can create, delete and modify a task, it is saved in a database and maintained, and you can empty the tasks whenever you want.'}  image={Tasks}  iconOne={iconOne} iconFour={iconFour} iconFive={iconFive} iconSix={iconSix} iconEight={iconEight}  repo='https://github.com/Levi-Programmer/Tasks' linkTitle={'not yet published'} imageMobile={TasksMobile} repoTitle={'Repository'} />
                <Card name={'Rick-and-Morty'} description={'Is a simple page where I bring an external api and show all the rick and morty characters, with a brief description. '} image={ RickMorty } iconOne={iconOne}  iconThree={iconThree} repo='https://github.com/Levi-Programmer/Rick-and-morty' link='https://levi-programmer.github.io/Rick-and-morty/' linkTitle={'Link'} imageMobile={RickMobile} repoTitle={'Repository'} />
                <Card name={'Use Context App'} description={'is simply a page that consumes an external api and displays all users and you can select them, using the react Context as a practice.'} image={useContext} imageMobile={useContextMobile} iconOne={iconOne} iconNine={iconNine} repo='https://github.com/Levi-Programmer/use-context-app' link='https://levi-programmer.github.io/use-context-app/'  linkTitle={'Link'} repoTitle={'Repository'} />
            </div>
            <h1 className='experience'>Experience</h1>
            <DevGroup/>
            <Card name={'Alfa'} description={'I was remodeling the checkout of this ecommerce, adjusting styles and adding functionalities with Java Script.'} image={alfaDesktop} imageMobile={alfaMobile} iconTen={iconTen} iconEleven={iconEleven} linkTitle={'Link'} link='https://www.alfa.com.co/?gclid=CjwKCAjw0dKXBhBPEiwA2bmObfBRZKp7jb8ojiU9dwpV4PailuFvR3Q8JIJ8_ZMybTPkW2jA7O7NcBoCYi4QAvD_BwE' repoTitle={'🚫'} />
            <Card name={'Remington'} description={'I was working on an ecommerce called Remington, building it from scratch, using Vtex, React, TypeScript, Css and GraphQl.'}  repoTitle={'🚫'}  linkTitle={'not yet published'}  image={ReminDesktop} imageMobile={reminMobile}  iconOne={iconOne} iconTen={iconTen} iconTwelve={iconTwelve}  iconNine={iconNine} />
        </div>
    )
}

