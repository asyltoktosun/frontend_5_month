import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserInfoAction } from "../../redux/actions"
import { useNavigate } from "react-router-dom"

function User({userInfo}){
    const dispatch=useDispatch()
    const {user_one} = useSelector(state => state.usersReducer)
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getUserInfoAction(userInfo.id))   
    }, [dispatch, userInfo.id])

    const handleUserClick = () => {
        dispatch(getUserInfoAction(userInfo.id))
        navigate(`/user/${userInfo.id}`)
    }
   
    return(
        <div onClick={handleUserClick} style={{width: '200px', height: '250px', border: '1px solid', alignItems: 'center'}}> 
            <img style={{width: '50px'}} alt="userIcon" src=""/>
            <div>
                <h1>{userInfo?.name}</h1>
                <p>{userInfo?.username}</p>
                <p>{userInfo?.email}</p>
            </div>
        </div>
    )
}
export default User