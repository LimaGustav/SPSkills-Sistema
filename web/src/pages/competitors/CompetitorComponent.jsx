export default ({competitor}) => <div className="g-card mb-5">
    <img src={competitor.img} alt={`Imagem de ${competitor.name}`} />
    <div className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
                <h3 className="fs-3">{competitor.name}</h3>
                <legend className="_right fs-4">{competitor.lastName}</legend>
            </div>
            <h3 className="_right fs-3">{competitor.senai}</h3>
        </div>
        <div className="d-flex justify-content-between align-items-end">
            <div className="d-flex flex-column">
                <h4 className="fs-4">Modalidade:</h4>
                <p className="fs-5">{competitor.modalidade}</p>
            </div>
            <div className="d-flex flex-column _right">
                <h4 className="fs-4">Idade:</h4>
                <p className="fs-5">{competitor.age}</p>
            </div>
        </div>
    </div>
</div>