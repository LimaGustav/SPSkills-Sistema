import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoSenai from '../../assets/img/logos/logo-senai.svg'
import logoWorldSkills from '../../assets/img/logos/logo-world-skills.png'
import api from '../../services/api'
import { isEmail } from '../../utils/Validator'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [erro, setErro] = useState('')

    async function recoverPassword(e) {
        e.preventDefault()
        if(!isEmail(email)) {
            setErro('Preencha os campos corretamente')
            return;
        }

        api.post('forgotpassword', {
            email: email
        })

        window.location.pathname = '/recuperarsenha'
    }

    return <main className='full back1'>
        <div className="logos d-flex justify-content-between align-items-end">
            <img src={logoWorldSkills} alt="Logo da World Skills" />
            <img src={logoSenai} alt="Logo do SENAI" />
        </div>
        <div className="position-absolute"></div>
        <form className="gradient flex-column" onSubmit={e => recoverPassword(e)}>
            <h1>Esqueci minha senha</h1>

            <div className="labelleft">
                <label htmlFor="">Email:</label>
                <input type="email" placeholder='Digite aqui seu Email:' onChange={e => setEmail(e.target.value)} value={email} />
            </div>

            <button>Recuperar senha</button>
            <span className='erro'>{erro}</span>
            <div className="labelleft minput mbottom">
                <Link to="/">Voltar para login</Link>
            </div>
        </form>
    </main>
}