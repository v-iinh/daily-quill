function Menu({active, setActive, setCategory}) {
    const link = [
        {id: 1, name: "General", value: "General"},
        {id: 2, name: "Business", value: "Business"},
        {id: 3, name: "Entertainment", value: "Entertainment"},
        {id: 4, name: "Health", value: "Health"},
        {id: 5, name: "Science", value: "Science"},
        {id: 6, name: "Sports", value: "Sports"},
        {id: 7, name: "Technology", value: "Technology"},
    ]

    function onClick(id, value) {
        setActive(id)
        setCategory(value)
    }

    return (
        <nav className="menu">
            <ul>
                {link.map(link => (
                    <li key={link.id} className={active === link.id ? "active" : "inactive"} onClick={() => onClick(link.id, link.value)}>
                        {link.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu