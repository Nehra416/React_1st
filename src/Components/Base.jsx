import React, { useState } from 'react'

export const Base = () => {

    const [value, setvalue] = useState(0); // This is a state of using useState hook. value is a variable which store value and setvalue is the function to change the value of the value variable by passing the parameter in setvalue function. useState me jo value denge vo initial ya fir default value hogi value var ki.

    const incriment = () => {
        setvalue(value + 1);
    }

    const decriment = () => {
        setvalue(value - 1);
    }
    
    return (
        <div>
            <div onClick={incriment}>Incriment</div>
            <div><input type="text" value={value} /></div>
            <div onClick={decriment}>Decriment</div>
        </div>
    )
}
