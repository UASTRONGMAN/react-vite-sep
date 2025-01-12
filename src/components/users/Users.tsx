import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import User from "./user/User.tsx";
import {apiServices} from "../../services/api.services.ts";


const Users= () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        apiServices.users.getAllUsers()
            .then(({users}:IUser[]) => setUsers(users))
    }, []);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;