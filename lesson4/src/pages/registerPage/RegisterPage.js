import React, { useState } from 'react'
import {Row, Col, Form, Button, Container, Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../../redux/actions'

function UserRegisterPage() {
    
    const {preloader} = useSelector(state=>state.preloaderReducer)
    const dispatch=useDispatch()

    const [user, setUser]=useState({
        name: '',
        password:'',
        newPassword: ''
    })

    const formValue=(event)=>{
        setUser({
           ...user,
           [event.target.name]:event.target.value
        })
    }

    

    const addUser=(event)=>{
        event.preventDefault()
        

        if(!user.name || !user.password || !user.newPassword){
            alert('Заполни все поля')
            return
        } else if(user.password !==user.newPassword){
            alert('Пароли не совпадают')
            return
        }
        if (localStorage.getItem('registeredUser') === user.name) {
            alert('Такой пользователь есть')
            return;
          }
        dispatch(addUserAction(user))


        localStorage.setItem('registeredUser', user.name)

    }


  return (
    <Container>
        {preloader ? 
        <Spinner animation='border' role='status'/> :
        <Form onSubmit={addUser}>
        <Row>
            <Col lg={3}>
                <Form.Group className='mb-3' controlId="name">
                    <Form.Control
                        type="text"
                        placeholder='name'
                        name='name'
                        onChange={formValue}
                    />
                </Form.Group>
            </Col>
            <Col lg={3}>
                <Form.Group className='mb-3' controlId="username">
                    <Form.Control
                        type="password"
                        placeholder='password'
                        name='password'
                        onChange={formValue}
                    />
                </Form.Group>
            </Col>
            <Col lg={3}>
                <Form.Group className='mb-3' controlId="email">
                    <Form.Control
                        type="password"
                        placeholder='password'
                        name='newPassword'
                        onChange={formValue}
                    />
                </Form.Group> 
            </Col>
            <Col lg={3}>
                <Button type='submit' variant='success' className='w-100'>
                    register user
                </Button>
            </Col>
        </Row>
    </Form>
  }
        
    </Container>
    )
}

export default UserRegisterPage