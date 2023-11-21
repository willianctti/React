import { useState } from "react"


const Hooks = () => {
    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40)

    const changeAge = () => {
        idade = 31
    }

    const changeNewAge = () => {
        setNovaIdade(45)
    }
    return (
        <div>
            <p>Idade: {idade} </p>
            <button onClick={changeAge}>Mudar idade</button>

            <p>Nova idade: {novaIdade} </p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )
}

export default Hooks