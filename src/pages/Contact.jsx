import '../styles/ContactMe.css'
//image
import Code from '../assets/code.jpg'
//icons 
import Gmail from '../assets/gmail.png'
import GitHub from '../assets/github.png'
import In from '../assets/in.png'

export default function Contact(){
    return(
        <div className='contact'>
            <img src={Code} className='code-image'/>
            <div className='mobile-co'>
                <h1 className='contact-title'> You can contact me here.</h1>
                <div className='icons-co'>


                    <div className='test'>
                        <img src={Gmail} className='networks-icons'/>
                        <a className='link-icon' href='mailto:miguedevweb6@gmail.com?Subject=Hi%20'><h4 className='icon-title'>Gmail</h4> </a>
                    </div>

                    <div className='test' style={{paddingTop: "10px"}}>
                        <img src={GitHub} className={'networks-icons'} />
                        <a className='link-icon' href='https://github.com/Levi-Programmer'><h4 className='icon-title'>GitHub</h4> </a>
                    </div>

                    <div className='test'>
                        <img src={In} className={'networks-icons'} />
                        <a className='link-icon' href='https://www.linkedin.com/in/miguel-angel-2a0738247' style={{paddingTop: "10px"}}><h4>LinkedIn</h4> </a>
                    </div>
                    
                   
                </div>

                <a className='repo-port' href='https://github.com/Levi-Programmer/Portfolio'> <p>Repository of this portfolio</p> </a>
            </div>

           
        </div> 
    )
}