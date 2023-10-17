import React from 'react'

export default function Sort() {
    return (
        <select name="sort">
            <option value="All">Sort by Category</option>
            <option value="Snowfall">Average Snowfall (highest to lowest)</option>
            <option value="Parks">Number of Parks (highest to lowest)</option>
            <option value="Lifts">Number of Lifts (highest to lowest)</option>
        </select>
    )
}
