import React from 'react'

export const Props = (props) => {

    return (
        <div>
            <h5>Incriment and Decriment function is passed through the props which acts on the click on the incriment and decriment buttons</h5>
            <div onClick={props.incriment} className='bg-sky-700 py-1 px-2 text-xl rounded'>Incriment</div>
            <div><input type="number" value={props.value} /></div>
            <div onClick={props.decriment}>Decriment</div>
        </div>
    )
}
