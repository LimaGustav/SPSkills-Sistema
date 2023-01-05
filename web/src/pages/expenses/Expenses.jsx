import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import api from "../../services/api";
import ExpenseComponent from "./ExpenseComponent";
import profile from "../../assets/img/profile.jpg"

export default function Expenses() {
    const [expenses, setExpenses] = useState([{ 'id': 1, 'typeId': 1, 'competitorId': 1, 'value': 29.99, 'type': { 'name': "Alimentação" }, 'competitor': { 'name': 'Lucas', 'lastName': 'Simionato' }, },
    { 'id': 2, 'typeId': 1, 'competitorId': 1, 'value': 29.99, 'type': { 'name': "Alimentação" }, 'competitor': { 'name': 'Lucas', 'lastName': 'Simionato' }, },
    { 'id': 3, 'typeId': 2, 'competitorId': 1, 'value': 29.99, 'type': { 'name': "Transporte" }, 'competitor': { 'name': 'Lucas', 'lastName': 'Simionato' }, },
    { 'id': 4, 'typeId': 3, 'competitorId': 1, 'value': 29.99, 'type': { 'name': "Outros" }, 'competitor': { 'name': 'Lucas', 'lastName': 'Simionato' }, },
    { 'id': 5, 'typeId': 1, 'competitorId': 2, 'value': 29.99, 'type': { 'name': "Alimentação" }, 'competitor': { 'name': 'Pedro', 'lastName': 'Lucas' }, },
    { 'id': 6, 'typeId': 2, 'competitorId': 2, 'value': 29.99, 'type': { 'name': "Transporte" }, 'competitor': { 'name': 'Pedro', 'lastName': 'Lucas' }, },
    { 'id': 7, 'typeId': 2, 'competitorId': 2, 'value': 29.99, 'type': { 'name': "Transporte" }, 'competitor': { 'name': 'Pedro', 'lastName': 'Lucas' }, },
    { 'id': 8, 'typeId': 3, 'competitorId': 2, 'value': 29.99, 'type': { 'name': "Outros" }, 'competitor': { 'name': 'Pedro', 'lastName': 'Lucas' }, },
    ])
    const [types, setTypes] = useState([{ 'id': 1, 'name': "Alimentação" }, { 'id': 2, 'name': "Transporte" }, { 'id': 3, 'name': "Outros" }])
    const [competitors, setCompetitors] = useState([{ 'id': 1, 'name': "Lucas", 'lastName': "Simionato" }, { 'id': 2, 'name': "Pedro", 'lastName': "Lucas" }])
    const [typeId, setTypeId] = useState(0)
    const [competitorId, setCompetitorId] = useState(0)
    const [maxValue, setMaxValue] = useState(500)
    const [minValue, setMinValue] = useState(0)
    const [requesting, setRequesting] = useState(true)


    useEffect(() => {
        document.querySelectorAll('.lazyinner').forEach(x => x.addEventListener('scroll', () => {
            if (x.scrollTop + x.offsetHeight > x.firstChild.offsetHeight) {

                async function getExpenses() {
                    if (requesting) return;
                    setRequesting(true)

                    const response = await api.get('expenses')

                    if (response.status === 200) {
                        setExpenses([...expenses, ...response.body])
                    }

                    setRequesting(false)
                }

                getExpenses()
            }
        }))
    })

    return <div className="full back2 d-flex flex-column">
        <Header />

        <main className="full2 d-flex flex-column container">
            <h1 className="fs-1">Despesas</h1>
            <div className="d-flex align-items-center justify-content-between">
                <select onChange={e => setCompetitorId(e.target.value)}>
                    <optgroup>
                        <option value={0} selected>Filtrar por competidor</option>
                        {
                            competitors.map((competitor) => {
                                return (
                                    <option value={competitor.id}>
                                        {competitor.name} {competitor.lastName}
                                    </option>
                                )
                            })
                        }
                    </optgroup>
                </select>
                <input type="number" placeholder="Valor mínimo" onChange={e => setMinValue(e.target.value)} value={minValue} min={0} max={maxValue}/>
                <input type="number" placeholder="Valor máximo" onChange={e => setMaxValue(e.target.value)} value={maxValue} min={minValue}/>
                <select onChange={e => setTypeId(e.target.value)}>
                    <optgroup>
                        <option value={0} selected>Filtrar por tipo de despesa</option>
                        {
                            types.map((type) => {
                                return (
                                    <option value={type.id}>
                                        {type.name}
                                    </option>
                                )
                            })
                        }
                    </optgroup>
                </select>
            </div>
            <div className="lazyload w-100 main" style={{ '--height': '100%' }}>
                <div className="lazyinner d-flex justify-content-between flex-wrap">
                    {
                        expenses.filter(x => x.competitorId == competitorId || competitorId == 0).filter(x => x.typeId == typeId || typeId == 0).filter(x => (minValue <= x.value && x.value <= maxValue) || minValue == null || maxValue == null || minValue == undefined || maxValue == undefined).map(x => <ExpenseComponent expense={x} key={x.id} />)
                    }
                </div>
            </div>
        </main>

        <Footer />
    </div>
}