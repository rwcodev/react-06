import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {

    const {handleSubmit, register, reset} = useForm()

    const { loginUser } = useAuth()

    const submit = data => {
    loginUser(data)
    reset({
        email:'',
        password:'',
    })
}

    return (
        <div>
        <form>
                <h2>Login User</h2>
            <div>
            <label>
                <span>Email</span>
                <input type="email" />
            </label>
            <label>
                <span>Password</span>
                <input type="password" />
            </label>
            </div>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default LoginPage