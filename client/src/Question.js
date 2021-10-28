import React,{useState} from 'react'

const Question = ({title,id,options}) => {
    const [currentAnswer,setAnswer] = useState(null)
    const handleSubmit = () => {
        if (currentAnswer == null) {
            alert("Pick an answer you noob!")
            return false
        }

        const config = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                answer: currentAnswer,
                user: {
                    id: 1,
                    username: "JackAttack"
                }
            })
        }
        fetch("/question/"+id,config)
    }

    return (
        <div>
            <h3>{title}</h3>
            {options.map(o => 
            <>
                <input
                    type="radio"
                    value={o.id}
                    name={"q1"}
                    onChange={()=>{
                        setAnswer(o.id)
                    }}
                />
                <label>{o.title}</label>

            </>
            )}
            <input 
                type="submit" 
                onClick={handleSubmit} 
                disabled={(currentAnswer == null) ? true : false}
            />
        </div>
    )
}

export default Question
