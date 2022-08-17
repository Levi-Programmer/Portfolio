import team from '../assets/team.jpg'
import '../styles/DevGroup.css'

export default function DevGroup(){
    return(
        <div className='dev-card'>
            <h2 className='paragraph-team'>I was on a development team called DevgroupCo that built Ecommerce, Marketplaces and Websites with technologies like <span style={{color: "#F71963"}}>Vtex</span>, <span style={{color: '#007acc'}}>TypeScript</span>, <span style={{color: "#61DBFB", fontWeight: "500"}}>React</span> and <span style={{color: "#e535ab"}}>GraphQl</span>.</h2>

            
            <img src={team} className='team-image'/>
        </div>
    )
}