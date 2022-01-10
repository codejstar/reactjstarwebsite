import React from 'react'

function Popup(props) {
    return (
        <>
        <div>
           <div class="alert alert-warning alert-dismissible fade show"  role="alert">
            <strong>{props.Alert.act}</strong> 
        </div>
        </div>
        </>
    )
}

export default Popup
