import { Container } from "react-bootstrap"
import { Stack } from "react-bootstrap"
import Sidebar from "./Sidebar"


const Main = (props) => {
    const showSidebar = props.showSidebar
    const children = props.children
    return (
        <Container>
            <Stack direction="horizontal" className="Main">
                {showSidebar && <Sidebar />} 
                <Container className="Content">
                    {children}
                </Container>
            </Stack>
        </Container>
    )
}

export default Main