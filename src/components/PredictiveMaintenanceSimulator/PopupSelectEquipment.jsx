import { useState, useEffect } from 'react'


function PopupSelectEquipment (props) {


  return (
    <>
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/75 w-full h-full flex justify-center items-center z-[1000]' onClick={() => props.closeModal(false)}>
          <div className='bg-white text-black rounded w-auto h-auto p-8 relative border-2 border-rose-800' onClick={(e) => e.stopPropagation()}>
            <button onClick={() => props.closeModal(false)}  className='absolute top-1 right-2'>×</button>
            <h1 className='text-2xl absolute top-1 left-2'>{props.equipmentData.name}</h1>
            {props.equipmentData.historical_data.map((data, idx) => 
                <p className='pt-2'>{data.date}: operated {data.hours_operated} hours at {data.temperature}C°</p>
            )}
          </div>
        </div>
    </>
  );
}

export default PopupSelectEquipment;