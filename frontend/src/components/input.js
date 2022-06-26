import React from 'react'
import {useText} from './teks'
import {useState} from 'react'
import './input.css'
import Kolom from './kolom'

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

    const [datak,setDatak] = useState(0)

    const getData = async () => {
        try{
            const res = await Axios.get('http://localhost:8082/api/komentar')
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
      <div className='Masuk'>
        <h3>Komentar : </h3>
        <input
          className='komentar1'
          type="text"
          value={komen}
          onChange={(e) => setKomen(e.target.value)}
        />
        
        <div className='Masuk1'>
          <div>
              <button onClick={Harapan}>Post Komentar</button>
          </div>
        </div>
    </div>
    <hr />
    <Kolom Nilai={awal} />
    </div>
  )
}

export default Masuk