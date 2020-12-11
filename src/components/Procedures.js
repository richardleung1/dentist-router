function Procedures(props) {
    const procedureItems = props.proceduresList.map((p) => {
        return <li>{p}</li>
    })
    return (
        <ul>
            {procedureItems}
        </ul>
    )
}

export default Procedures;