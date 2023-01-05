import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import api from "../../services/api";
import CompetitorComponent from "./CompetitorComponent";
import profile from "../../assets/img/profile.jpg"

export default function Competitors() {
    const [competitors, setCompetitors] = useState([{'id': 1, 'name': 'Lucas', 'lastName': 'Simionato', 'img': profile, 'age': 20, 'senai': '#104', 'modalidade': 17},
    {'id': 2, 'name': 'Lucas', 'lastName': 'Simionato', 'img': profile, 'age': 20, 'senai': '#104', 'modalidade': 17},
    {'id': 3, 'name': 'Lucas', 'lastName': 'Simionato', 'img': profile, 'age': 20, 'senai': '#104', 'modalidade': 17},
    {'id': 4, 'name': 'Lucas', 'lastName': 'Simionato', 'img': profile, 'age': 20, 'senai': '#104', 'modalidade': 17},
    {'id': 5, 'name': 'Lucas', 'lastName': 'Simionato', 'img': profile, 'age': 20, 'senai': '#104', 'modalidade': 17}
])
    const [search, setSearch] = useState('')
    const [requesting, setRequesting] = useState(true)

    
    useEffect(() => {
        document.querySelectorAll('.lazyinner').forEach(x => x.addEventListener('scroll', () => {
            if(x.scrollTop + x.offsetHeight > x.firstChild.offsetHeight) {

                async function getCompetitors() {
                    if(requesting) return;
                    setRequesting(true)
            
                    const response = await api.get('competitors')
            
                    if(response.status === 200) {
                        setCompetitors([...competitors, ...response.body])
                    }
            
                    setRequesting(false)
                }

                getCompetitors()
            }
        }))
    })

    return <div className="full back2 d-flex flex-column">
        <Header />

        <main className="full2 d-flex flex-column container">
            <h1 className="fs-1">Competidores</h1>
            
            <input type="text" placeholder="Pesquisar competidor..." onChange={e => setSearch(e.target.value)} value={search}/>
            <div className="lazyload w-100 main" style={{'--height': '100%'}}>
                <div className="lazyinner d-flex justify-content-between flex-wrap">
                    {competitors.filter(x => x.name.split(' ').filter(y => !y.toUpperCase().includes(search.toUpperCase())).length === 0).map(x => <CompetitorComponent competitor={x} key={x.id} />)}
                </div>
            </div>
        </main>

        <Footer />
    </div>
}