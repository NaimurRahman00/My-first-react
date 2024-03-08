import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    function teamAdd() {
        const addNewMamber = team + 1;
        setTeam(addNewMamber);
    }
    function teamRemove() {
        const removeMamber = team - 1;
        setTeam(removeMamber);
    }

    const teamStyle = {
        border: '2px solid tomato',
        marginTop: '2rem',
        padding: '2rem'
    }
    const gapStyle = {
        marginBottom: '1rem'
    }

    return (
        <div style={teamStyle}>
            <h3>Team: {team}</h3>
            <button style={gapStyle} onClick={teamAdd}>Add New Mamber</button>
            <br />
            <button onClick={teamRemove}>Remove A Mamber</button>
        </div>
    )
}