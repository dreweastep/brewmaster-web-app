import { Icon, Message, Container } from 'semantic-ui-react'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <Container>
                <Message id="footer" attached="bottom" warning>
                    <Icon name="mail" />
                    <Link href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
                        <a>Contact Us</a>
                    </Link>
                </Message>
            </Container>
        </>
    );
}

export default Footer;
