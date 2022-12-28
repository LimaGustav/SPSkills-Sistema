export default function LazyLoad({children}) {


    return <div className="lazyload w-100 main" style={{'--height': '100%'}}>
        <div className="lazyinner w-75 m-auto d-flex justify-content-between flex-wrap">
            {children}
        </div>
    </div>
}