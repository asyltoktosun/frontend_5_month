import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import {Button, Container, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction } from '../../redux/actions';

function UserListPage() {
  const {preloader} = useSelector(state=>state.preloaderReducer)
  const dispatch=useDispatch()

  const [todo, setTodo] =useState({
    name:'',
    password: ''
  })

  const formValue=(event)=>{
    setTodo({
       ...todo,
       [event.target.name]:event.target.value
    })
}

const addPokemon=(event)=>{
    event.preventDefault()
    dispatch(addTodoAction(todo))

    if(todo.name==='' ||  todo.password==='' ){
        alert('Заполни все поля')
        return
    }
}

  return (
    <Container>
        {preloader ? 
        <Spinner animation='border' role='status'/> :

        <Form onSubmit={addPokemon}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>To Do</Form.Label>
            <Form.Control type="name" placeholder="Enter To Do" name='name' onChange={formValue}/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' onChange={formValue}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>}
      
    </Container>
 
  );
}

export default UserListPage;