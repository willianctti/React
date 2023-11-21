const List = () => {
    const items = [{
        id: 1,
        name: "Willian",
        
    },
    {
        id: 2,
        name: "Bruno"
    }

];

    return <div>
        {items.map((item) => (
            <p key={item.id}>{item.name}</p>
        ))}
    </div>
}

export default List