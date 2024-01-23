import { useState } from 'react'

const Person = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [ personAge, setAge ] = useState(age)

    return(
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {personAge}</p>
            <p>hair Color: {hairColor}</p>
            <button onClick={() => setAge(personAge + 1)}>Birthday Button for {firstName} {lastName}</button>
        </>
    )
}
export default Person