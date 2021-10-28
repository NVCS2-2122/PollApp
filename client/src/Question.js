import React from 'react'

const Question = ({title,id,options}) => {
    return (
        <div>
            <h3>{title}</h3>
            {options.map(o => 
            <>
                <input
                    type="radio"
                    value={o.id}
                    name={"q1"}
                />
                <label>{o.title}</label>
            </>
            )}
        </div>
    )
}

export default Question
