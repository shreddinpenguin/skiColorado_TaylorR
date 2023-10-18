import React, { useState } from 'react'

export default function Sort({ allResorts, setIsSort }) {


    return (
        <select onChange={(e)=>setIsSort(e.target.value)} name="sort">
            <option value="All">Sort by Category</option>
            <option value="avgSnow">Average Snowfall (highest to lowest)</option>
            <option value="parks">Number of Parks (highest to lowest)</option>
            <option value="lifts">Number of Lifts (highest to lowest)</option>
        </select>
    )
}