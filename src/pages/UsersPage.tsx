import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {apiServices} from "../services/api.services.ts";
import Users from "../components/users/Users.tsx";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        apiServices.users.getAllUsers()
            .then(({users}:IUser[]) => setUsers(users))
    }, []);
    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default UsersPage;