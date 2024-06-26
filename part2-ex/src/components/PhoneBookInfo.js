import React from 'react'

const PhoneBookInfo = (props) => {
    return (
        <div>
            {
                props.persons.map(person =>
                    <ul key={person.id}>
                        <li>{person.name}</li>
                        <li>{person.number}</li>
                        <button onClick={() => props.deletePerson(person.id)}>delete</button>
                    </ul>
                )
            }
        </div>
    )
}
export default PhoneBookInfo