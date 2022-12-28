import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoSenai from '../../assets/img/logos/logo-senai.svg'
import logoWorldSkills from '../../assets/img/logos/logo-world-skills.png'
import api from '../../services/api'
import { saveToken } from '../../utils/auth'
import { isEmail, isGreaterThan } from '../../utils/Validator'

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    async function login(e) {
        e.preventDefault()
        if(!isGreaterThan(senha, 8) || !isEmail(email)) {
            setErro('Preencha os campos corretamente')
            return;
        }

        const response = await api.post('login', {
            email: email,
            senha: senha
        })

        if(response.status === 200) {
            saveToken(response.data.token)
            window.location.pathname = ''
        } else {
            setSenha('')
            setErro('Email ou senha incorretos')
        }
    }

    return <main className='full back1'>
        <div className="logos d-flex justify-content-between align-items-end">
            <img src={logoWorldSkills} alt="Logo da World Skills" />
            <img src={logoSenai} alt="Logo do SENAI" />
        </div>
        <div className="position-absolute"></div>
        <form className="gradient flex-column" onSubmit={(e) => login(e)}>
            <h1>Login</h1>

            <div className="labelleft">
                <label htmlFor="">Email:</label>
                <input type="email" placeholder='Digite aqui seu Email:' onChange={e => setEmail(e.target.value)} value={email} required />
            </div>

            <div className="labelleft">
                <label htmlFor="">Senha:</label>
                <input type="password" placeholder='Digite aqui sua Senha:' pattern='.{8,}' title='A senha precisa ter pelo menos 8 caracteres' onChange={e => setSenha(e.target.value)} value={senha} required />
            </div>

            <button>Logar</button>
            <span className='erro'>{erro}</span>
            <div className="labelleft minput mbottom">
                <Link to="/perdiminhasenha">Esqueci minha senha</Link>
            </div>
        </form>
    </main>
}