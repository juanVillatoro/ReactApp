import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const imcrementCounter = () => {
        setCounter(counter + 1);
    }

    const resetCounter = () => {
        setCounter(counter == 0);
    }

    const imcrement2Counter = () => {
        setCounter(counter + 2);
    }

    return (
        <div class="flex w-full justify-center items-center gap-4 my-8 px-4">
            <div class="w-full">
                <p>Contador: {counter}</p>
                <div class="flex w-full justify-center container mx-auto grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 px-4">
                    <a class="m-2 w-auto mt-4 bg-blue-200 text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-300 transition duration-300 text-center" onClick={imcrementCounter}>Incrementar</a>
                    <a class="m-2 w-auto mt-4 bg-yellow-200 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300 text-center" onClick={resetCounter}>Reiniciar</a>
                    <a class="m-2 w-auto mt-4 bg-green-200 text-blue-900 px-4 py-2 rounded-lg hover:bg-green-300 transition duration-300 text-center" onClick={imcrement2Counter}>Incrementar 2</a>
                </div>
            </div>
        </div>
    )
}

export default Counter;