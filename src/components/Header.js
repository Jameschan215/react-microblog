import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg='light' sticky='top' className='Header'>
            <Container>
                <Navbar.Brand>
                    Microblog
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header