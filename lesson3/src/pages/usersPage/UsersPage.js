import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAction } from '../../redux/actions'
import usersReducer from '../../redux/reducers/usersReducer'
import User from '../../components/user/User'


function UsersPage() {

  const dispatch=useDispatch()
  const usersState=useSelector(state=>state.usersReducer.users)

  useEffect(()=>{
    dispatch(fetchUserAction()) 
  },[])
  const users = usersState && usersState.users;


  console.log(users);

  return (
    <div>
        {users && users.map(userInfo => <User key={userInfo.id} userInfo={userInfo}/>)}
    </div>
  )
}

export default UsersPage