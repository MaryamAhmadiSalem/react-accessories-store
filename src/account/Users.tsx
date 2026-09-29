import { useNavigate, useParams } from "react-router-dom"

const Users = ()=>{
    const {email} = useParams()
    const navigate = useNavigate()

    return(
        <div className="about">
            <h1 className="titleOfText">hello, dear<br/>{email}
                <hr/>
            </h1>
            <h2 className="text">Welcome to the Maria Accessories Store. Please visit the store page<br/> 
            to complete your purchase.</h2>
            <button className="goToTheHomePage" onClick={()=>navigate('/')}>go to the home page</button>
        </div>
    )
}
export default Users ;