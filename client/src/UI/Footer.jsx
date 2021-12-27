import React from 'react'
import { Container } from 'react-bootstrap'
import { IconsRow } from '../components/footer_section'

function Footer() {
  return (
    <footer className='footer mt-auto py-2 bg-light'>
      <Container>
        <IconsRow />
      </Container>
    </footer>
  )
}

export default Footer
