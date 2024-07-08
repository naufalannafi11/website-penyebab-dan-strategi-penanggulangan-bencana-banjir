import React from 'react'

const CardData = ({data, kota}) => {

  return (
    <div className='w-full  flex flex-row justify-center items-center gap-3'>


            {data.filter(k => kota === 'All' || k.nama === kota).map((k, index) => (
              <div key={index} className=' shadow-md rounded-xl px-6 py-3' >
                <h3>{k.nama}</h3>
                <p className='text-sm leading-none'>Jumlah Kasus: {k.jumlah_kasus}</p>
                <p className='text-sm leading-none'>Kerugian: {k.kerugian}</p>
                <p className='text-sm leading-none'>Korban Jiwa: {k.korban_jiwa}</p>
                <p className='text-sm leading-none'>Frekuensi Banjir: {k.frekuensi_banjir}</p>
                <p className='text-sm leading-none'>Rumah Rusak: {k.rumah_rusak}</p>
              </div>
            ))}
          
      
    </div>
  )
}

export default CardData