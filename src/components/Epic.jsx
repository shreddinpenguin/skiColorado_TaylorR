import { useState, useEffect } from 'react'

export default function Epic() {

    const [resorts, setResorts] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/EpicResorts")
        .then(res => res.json())
        .then((data) => setResorts(data))
    }, [])

    const resortItems = resorts.map((resort) => (
        <li className="card" key={resort.name}>
            <img src={resort.image} alt={resort.name} />
            <h4>{resort.name}</h4>
            <p>Average Snowfall: {resort.avgSnow}"</p>
            <p>Parks: {resort.parks}</p>
            <p>Lifts: {resort.lifts}</p>
        </li>
    ))

    return (
        <ul className="cards">{resortItems}</ul>
    )
}
