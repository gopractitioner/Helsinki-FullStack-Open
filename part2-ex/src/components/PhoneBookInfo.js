import React from 'react'

const PhoneBookInfo = (props) => {
    return (
        <div>
            {
                props.persons.map(person =>
                    <ul key={person.id}>
                        <li>{person.name}</li>
                        <li>{person.number}</li>
                    </ul>
                )
            }
        </div>
    )
}
export default PhoneBookInfo