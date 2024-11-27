import MyChildComponent from './MyChildComponent'
import Counter from './Counter';
import { useState } from 'react';

const MyComponent = () => {

    // const name = "Juan Villatoro";
    // const edad = 22;

    const [name, setName] = useState("Juan Antonio Villatoro");
    const [edad, setEdad] = useState(22);
    
    const changeData = () => {
        setName("Didier Bustillo");
        setEdad(20);
    }

    return (
        <>
            {/* <div className="text-red-600">Soy el componente padre</div>
            <div>Bienvenid@s</div>
            <MyChildComponent name={name} edad={edad}/> */}
            {/* <button onClick={changeData}>Cambiar Nombre y Edad</button> */}
            <Counter />
        </>
    )
}

export default MyComponent;