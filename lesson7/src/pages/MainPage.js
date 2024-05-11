import React from 'react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

function MainPage() {
  return (
    <Container variant='large'>
        <Input
            label='Enter password'
            placeholder='password'
            type='password'
        />
        <Input
            label='Enter password'
            placeholder='password'
            type='password'
        />
        <Button disabled={false} variant='outLined'>sign up</Button>
    </Container>
  )
}

export default MainPage