import React from 'react'

const SearchBar = (props) => {
    return (
        <>
            <div>
                <form onSubmit={props.handleSearch}>
                    filter shown with <input onChange={props.handleSearchChange} />
                    <button type="submit">search</button>
                </form>
            </div>
        </>
    )
}

export default SearchBar