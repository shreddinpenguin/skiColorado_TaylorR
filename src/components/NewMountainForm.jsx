import React, { useState } from 'react'

export default function NewMountainForm({ submit }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [avgSnow, setAvgSnow] = useState("")
    const [parks, setParks] = useState("")
    const [lifts, setLifts] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let resortData = {
            name: name,
            image: image,
            avgSnow: parseInt(avgSnow),
            parks: parseInt(parks),
            lifts: parseInt(lifts)
        }
        fetch("http://localhost:4000/addedResorts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(resortData)
        })
        .then(res => res.json())
        .then((newResort) => {
            submit(newResort)
            setName("")
            setImage("")
            setAvgSnow("")
            setParks("")
            setLifts("")
        })
    }

  return (
    <div className='newMountain'>
        <h3>Add a New Mountain</h3>
        <form onSubmit={handleSubmit} className='form'>
            <input onChange={(e)=> setName(e.target.value)} placeholder='Mountain Name' value={name} type='text'></input>
            <input onChange={(e)=> setImage(e.target.value)} placeholder='Image URL' value={image} type='text' ></input>
            <input onChange={(e)=> setAvgSnow(e.target.value)} placeholder='Average Snowfall' value={avgSnow} type='text'></input>
            <input onChange={(e)=> setParks(e.target.value)} placeholder='# of Parks' value={parks} type='text'></input>
            <input onChange={(e)=> setLifts(e.target.value)} placeholder='# of Lifts' value={lifts} type='text'></input>
            <button>Submit</button>
        </form>
    </div>
  )
}