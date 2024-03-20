import React from 'react'
import usersReducer from '../../redux/reducers/usersReducer'
import {useDispatch, useSelector} from "react-redux"
import { addUserAction, changeInputAction, deleteUserAction } from '../../redux/actions'
import User from '../../components/user/User'

function UsersPage() {
  const dispatch=useDispatch()
  const {users, value}=useSelector(state=>state.usersReducer)

  const changeInput=(event)=>{
    dispatch(changeInputAction(event.target.value))
  }
  
  const addUser=()=>{
    dispatch(addUserAction(value))
  }

  const deleteAll=()=>{
    dispatch(deleteUserAction())
  }

  return (
    <div>
        <input value={value} onChange={changeInput} type='text' placeholder='name'/>
        <button onClick={addUser}>add</button>
        <button onClick={deleteAll} >delete all</button>

        {users.map((users, idx)=> <User key={idx} userName={users} />)}
    </div>
  )
}

export default UsersPage