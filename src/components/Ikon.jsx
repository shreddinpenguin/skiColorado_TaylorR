import React, { useEffect, useState } from 'react'

export default function Ikon({ ikon, isSort }) {

    const sortChange = ikon.sort((sort1, sort2) => {
        if (isSort === "avgSnow") {
            return sort2.avgSnow - sort1.avgSnow
        } else if (isSort === "parks") {
            return sort2.parks - sort1.parks
        }
        else if (isSort === "lifts") {
            return sort2.lifts - sort1.lifts
        } return null
        })

    const resortItems = ikon.map((resort) => (
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
