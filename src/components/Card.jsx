import '../styles/Card.css'
import { useState, useEffect } from 'react'



export default function Card( {name, description, image, iconOne, iconTwo, iconThree, iconFour, iconFive, iconSeven,iconSix, iconEight, iconNine, iconTen, iconEleven, iconTwelve, repo, link, linkTitle, imageMobile, repoTitle} ){
    
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth)
    const [windowsWidthD, setWindowsWidthD] = useState(window.innerWidth)

    const isMobile = windowsWidth < 768;
    const isDesktop = windowsWidthD > 768;

    useEffect(() => {
        window.addEventListener('resize', () => setWindowsWidth(window.innerWidth));
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => setWindowsWidthD(window.innerWidth));
    }, [])


   

    return(
        <div className='card-container'>

        {
            isMobile && <img src={imageMobile} />
        }

        {
            isDesktop && <img src={image} className='card-image'/>
        }

            
            
            <h5 className='card-title'> {name} </h5>
            <p className='card-description'> {description} </p>
            <h3>Created with the following tools</h3>

        <div className='icons-container'>
         {iconOne && <img src={iconOne} className='icon'/>} 
         {iconFour && <img src={iconFour} className='icon'/>} 
         {iconTwo && <img src={iconTwo} className='icon'/>} 
         {iconThree && <img src={iconThree} className='icon'/>}   
         {iconFive && <img src={iconFive} className='icon'/>} 
        {iconSix &&<img src={iconSix} className='icon'/>} 
        {iconSeven && <img src={iconSeven} className='icon'/>} 
        {iconEight && <img src={iconEight} className='icon'/>}
        {iconNine && <img src={iconNine} className='icon'/>}
        {iconTen && <img src={iconTen} className='icon-2' />}
        {iconEleven && <img src={iconEleven} className='icon' />}
        {iconTwelve && <img src={iconTwelve} className='icon' />}
        </div>

        <div className='repo-link'>
           <a href={repo} className='link-repo'>  {repoTitle} </a>
           |
           <a href={link} className='link-repo'> {linkTitle} </a>
        </div>
           
        </div>
        
    )
}