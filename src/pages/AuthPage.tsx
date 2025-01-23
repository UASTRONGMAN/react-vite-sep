import {useForm} from "react-hook-form";
import {login} from "../services/api.services.ts";
import {ILoginDataModel} from "../models/ILoginDataModel.ts";


const AuthPage = () => {
    const {register, handleSubmit} = useForm();
    const auth = (loginData:ILoginDataModel) => {
        login(loginData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(auth)}>
                <input type="text" {...register('username')} placeholder={'username'}/>
                <input type="text" {...register('password')} placeholder={'password'}/>
                <button>Login</button>
            </form>

        </div>
    );
};

export default AuthPage;