import React, {useState} from 'react'
import './kolom.css'

function Kolom({Nilai}) {
    const [suka,setSuka] = useState(0)
    const [gasuka,setGasuka] = useState(0)

  return (
    <div>
    {
        Nilai.map(pr => 
            <div> 
              <div>
                <div class="dialogbox">
                  <div class="body">
                    <span class="tip tip-left"></span>
                    <div class="message">
                      <span>{pr.Komen}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              <button type="button" class="btn btn-primary tigapuluh"> ❤️ </button>
              </div>
            </div>
        )
    }
    </div>
  )
}

export default Kolom