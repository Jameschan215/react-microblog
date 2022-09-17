import { useContext } from "react"
import Alert from 'react-bootstrap/Alert'
import Collapse from 'react-bootstrap/Collapse'
import { FlashContext } from "../contexts/FlashProvider"


const MessageToBeFlashed = () => {
    const { messageToBeFlashed, visible, hideFlash } = useContext(FlashContext)

    return (
        <Collapse in={visible}>
            <div>
                <Alert variant={messageToBeFlashed.type || 'info'} 
                dismissible onClose={hideFlash}>
                    {messageToBeFlashed.message}
                </Alert>
            </div>
        </Collapse>
    )
}

export default MessageToBeFlashed
