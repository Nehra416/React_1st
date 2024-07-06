import React, { useState } from 'react'

export const Multiple = () => {

    const [input, setInput] = useState()
    const [output, setOutput] = useState(0)

    const inputValue = (event) => {
        setInput(parseInt(event.target.value ));
    }
    const Incriment = () => {
        setOutput(parseInt(output + input));
    }

    const Decriment = () => {
        setOutput(parseInt(output - input));
    }

    return (
        <div>
            <div onClick={Incriment}>Incriment</div>
            <div><input type="text" onChange={inputValue} value={input} /></div>
            <div onClick={Decriment}>Decriment</div>
            <div>Output is : {output}</div>
        </div>
    )
}
