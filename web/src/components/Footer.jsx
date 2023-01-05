import logoSenai from '../assets/img/logos/logo-senai.svg'
import logoWorldSkills from '../assets/img/logos/logo-world-skills.png'

export default function Footer(){


    return <footer className='footer d-flex align-items-center'>
        <div className="container d-flex justify-content-around align-items-center">
            <img className='mw-50' src={logoWorldSkills} alt="Logo da World Skills" />
            <img className='mw-50' src={logoSenai} alt="Logo do SENAI" />
        </div>
    </footer>
}