import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTitle,  getPosts } from '../../redux/PostsSlice'


function PostPage() {

    const dispatch=useDispatch()
    const {title, posts}=useSelector(state=> state.postsReducer)

    console.log(posts);

    const changeTitlePost=()=>{
        dispatch(changeTitle())
    }

  return (
    <div>
        {/* <h1>{title}</h1> */}
        {/* <button onClick={changeTitlePost}>change title</button>
        <button onClick={()=>dispatch(changeTitleParams('Hello Geeks'))}> change title with params</button> */}

        <button onClick={()=>dispatch(getPosts())}>get posts</button>
        <button>delete all</button>
    </div>
    
  )
}

export default PostPage