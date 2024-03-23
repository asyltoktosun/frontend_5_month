

function User({userInfo}){
    if(!userInfo){
        return null
    }
    return(
        <> 
            <img alt="userIcon"/>
            <div>
                <h1>{userInfo?.name}</h1>
                <p>{userInfo?.username}</p>
                <p>{userInfo?.email}</p>
            </div>
        </>
    )
}
export default User