import { Link } from 'react-router-dom'
import logoSenai from '../../assets/img/logos/logo-senai.svg'
import logoWorldSkills from '../../assets/img/logos/logo-world-skills.png'

export default function SendMail() {

    return <main className='full back1'>
        <div className="logos d-flex justify-content-between align-items-end">
            <img src={logoWorldSkills} alt="Logo da World Skills" />
            <img src={logoSenai} alt="Logo do SENAI" />
        </div>
        <div className="position-absolute"></div>
        <div className="gradient flex-column">
            <h1>Esqueci minha senha</h1>

            <p className='mminput'>Encaminhamos um email com as instruções para a recuperação da senha</p>

            <Link to='/' className='button'>Voltar a página de login</Link>
        </div>
    </main>
}