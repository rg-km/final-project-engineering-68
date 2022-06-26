import React, {useState, useEffect } from 'react'
import Axios from 'axios'


function Aaxios() {

    const [datak,setDatak] = useState(0)

    const getData = async () => {
        try{
            const res = await Axios.get('http://localhost:8082/api/konten')
            setDatak(res.data)
            
        } catch (error){
            alert(error.message)
        }
    }
    useEffect(() => {
        getData()
    })
    
  return (
    <div>
        {
            console.log(datak)
        }
    </div>
  )
}

export default Aaxios