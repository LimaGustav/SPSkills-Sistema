export default ({expense}) => <div className="g-card mb-5">
    <div className="d-flex flex-column justify-content-between w-100">
        <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
                <h3 className="fs-3">Valor:</h3>
                <legend className="_right fs-4">R${expense.value}</legend>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-end w-100">
            <div className="d-flex flex-column w-50">
                <h4 className="fs-4">Tipo de despesa:</h4>
                <p className="fs-5">{expense.type.name}</p>
            </div>
            <div className="d-flex flex-column _right align-items-start w-50">
                <h4 className="fs-4">Competidor:</h4>
                <p className="fs-5">{expense.competitor.name} {expense.competitor.lastName}</p>
            </div>
        </div>
    </div>
</div>