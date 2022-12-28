export default ({competitor}) => <div className="g-card mb-5">
    <img src={competitor.img} alt={`Imagem de ${competitor.name}`} />
    <div className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
                <h3>{competitor.name}</h3>
                <legend>{competitor.lastName}</legend>
            </div>
            <h3 className="_right">{competitor.senai}</h3>
        </div>
        <div className="d-flex justify-content-between align-items-end">
            <div className="d-flex flex-column">
                <h4>Modalidade:</h4>
                <p>{competitor.modalidade}</p>
            </div>
            <div className="d-flex flex-column _right">
                <h4>Idade:</h4>
                <p>{competitor.age}</p>
            </div>
        </div>
    </div>
</div>