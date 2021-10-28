import React from 'react'

const Question = ({title,id,options}) => {
    const [currentAnswer,setAnswer] = useState(null)
    const handleSubmit = () => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                answer: "a",
                user: {
                    id: 1,
                    username: "JackAttack"
                }
            })
        }
        fetch("/question/1",config)
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
                />
                <label>{o.title}</label>

            </>
            )}
            <input 
                type="submit" 
                onClick={handleSubmit}
            />
        </div>
    )
}

export default Question
