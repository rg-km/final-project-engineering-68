import React from 'react'
import {useText} from './teks'
import {useState} from 'react'
import './input.css'
import Kolom from './kolom'
import Tombol from './Tombol'

function Masuk() {

    const [nameValue, setNameValue] = useState('')
    const [komen, setKomen] = useState('')
    const [awal,setAwal] = useState([])


    const Harapan = () => {
        setAwal([...awal, {
            id : awal.length,
            Komen: komen,
            Nama: nameValue,
            Suka: 0,
            Gasuka: 0
        }])
    }

  return (
    <div>
        <Kolom Nilai={awal} />

        <h3>Nama : </h3>
        <input
          className='komentar'
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <h3>Komentar : </h3>
        <input
          className='komentar1'
          type="text"
          value={komen}
          onChange={(e) => setKomen(e.target.value)}
        />

        <div>
            <button onClick={Harapan}>Post Komentar</button>
        </div>
    </div>
  )
}

export default Masuk