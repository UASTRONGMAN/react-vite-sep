import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {apiServices} from "../services/api.services.ts";
import Users from "../components/users/Users.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";
import {IResponse} from "../models/IResponse.ts";

const UsersPage = () => {
    const [query] = useSearchParams();
    const skip = query.get('skip');
    const [users, setUsers] = useState<IResponse>({
        users:[],
        total: 0,
        skip: 0,
        limit: 0
    })
    useEffect(() => {
        apiServices.users.getAllUsers(skip || '0')
            .then(value => setUsers(value))
    }, [skip]);
    return (
        <div>
            <Users users={users.users}/>
            <Pagination props={users}/>
        </div>
    );
};

export default UsersPage;