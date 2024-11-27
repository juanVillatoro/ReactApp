const MyChildComponent = (props) => {
    return (
        <div>
            <h1>Soy el componente hijo</h1>
            <div>Mi nombre es: {props.name}</div>
            <div>Mi edad es: {props.edad}</div>
        </div>
    )
}

export default MyChildComponent;