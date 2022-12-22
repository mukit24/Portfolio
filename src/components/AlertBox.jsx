import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertBox = () => {
    const [show, setShow] = useState(true);
    if(show){
        return (
            <Alert variant="info text-center load" onClose={() => setShow(false)} dismissible>
                <samll><i className='fa fa-warning me-2'></i><strong>Live Demos  may take some time to Load.</strong></samll>
            </Alert>
        )
    }else{
        return(
            <></>
        )
    }
    
}

export default AlertBox