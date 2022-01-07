import {useState, useEffect} from 'react'

const LoginForm = () => {
    const [emailInput, setEmailInput] = useState()
    const [passwordInput, setPasswordInput] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        if(passwordInput < 1){
            alert("Please enter a password")
        }
        console.log(emailInput, passwordInput)
    }
    return (
        <form>
          <p>Email: <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}></input></p>
          <p>Password: <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}></input></p>  
          <button onClick={onSubmit}>Login</button>  
        </form>
    )
}

export default LoginForm
