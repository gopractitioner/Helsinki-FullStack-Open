import React from 'react'

const Notification = ({ message, infoFlag }) => {
    if (message === null) {
        return null
    }

    return (
        <>
            {
                infoFlag ?
                    <div className='normal'>
                        {message}
                    </div>
                    :
                    <div className='error'>
                        {message}
                    </div>
            }
        </>
    )
    // if (infoFlag) {
    //     return (
    //         <div className='normal'>
    //             {message}
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='error'>
    //             {message}
    //         </div>
    //     )
    // }
}

export default Notification