import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {apiServices} from "../services/api.services.ts";
import Users from "../components/users/Users.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";

const UsersPage = () => {
    const [query] = useSearchParams();
    const skip = query.get('skip');
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        apiServices.users.getAllUsers(skip || '0')
            .then(value => setUsers(value.users))
    }, [skip]);
    return (
        <div>
            <Users users={users}/>
            <Pagination/>
        </div>
    );
};

export default UsersPage;