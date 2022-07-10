import { get } from 'mongoose';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import './getData.css'
import axios from 'axios'

const GetData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            console.log(response.data)
            setData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
       
        <div className='main-div'>
            {data.map((el) => (
                <div className='sub-div' key={el.id}>
                    <img src={el.image} alt="" />
                    <h3>{el.title}</h3>
                    
                </div>
               
            ))}
        </div>
    )
}

export default GetData
