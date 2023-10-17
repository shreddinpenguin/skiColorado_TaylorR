import React, { useEffect, useState } from 'react'

export default function Home() {

    const [epic, setEpic] = useState([])
    const [ikon, setIkon] = useState([])
    const [allResorts, setAllResorts] = useState([])

    useEffect(()=> {
        Promise.all([
            fetch("http://localhost:4000/epicResorts"),
            fetch("http://localhost:4000/ikonResorts"),
        ])
        .then(([resEpic, resIkon]) => 
            Promise.all([resEpic.json(), resIkon.json()])
        )
        .then(([dataEpic, dataIkon])=> {
            setEpic(dataEpic)
            setIkon(dataIkon)
            setAllResorts(dataEpic.concat(dataIkon))
        })
    }, [])
    console.log(allResorts)

    const resortItems = allResorts.map((resort) => (
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
