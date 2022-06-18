import React, {useState} from 'react'

function Kolom({Nilai}) {
    const [suka,setSuka] = useState(0)
    const [gasuka,setGasuka] = useState(0)

  return (
    <div>
    {
        Nilai.map(pr => 
            <div>
                <div>
                <h3 >{pr.Nama}</h3>
                <h4 >{pr.Komen}</h4>
                <button onClick>Suka</button>
                <button onClick>Gasuka</button>
                <p> suka: {pr.Suka}, gasuka: {pr.Gasuka}</p>
                </div>
            </div>
        )
    }
    </div>
  )
}

export default Kolom