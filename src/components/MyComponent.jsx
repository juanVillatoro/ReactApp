import MyChildComponent from './MyChildComponent'

const MyComponent = () => {
    return (
        <>
            <div className="text-red-600">Soy el componente padre</div>
            <div>Bienvenid@s</div>
            <MyChildComponent />
        </>
    )
}

export default MyComponent;