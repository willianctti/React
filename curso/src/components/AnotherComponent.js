const AnotherComponent = () => {
    const handleClick = () => {
        console.log('CLicou no botão!')
    }

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}> Evento de click</button>
        </div>
    )
}

export default AnotherComponent;