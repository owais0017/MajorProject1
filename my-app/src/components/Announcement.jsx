import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 35px;
    background-color: teal;
    border-radius: 1px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`

const Announcement = () => {
  return (
    <Container>Sale 50% flat offer on all the items</Container>
  )
}

export default Announcement