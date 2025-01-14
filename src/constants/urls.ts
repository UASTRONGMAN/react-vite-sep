const baseURL = 'https://dummyjson.com'

const urls = {
    users:{
        getAllUsers: (skip: string) => baseURL + '/users?skip=' + skip,
        getUser: (id:number) => urls.users.getAllUsers + '/' + id
    }
}

export {urls}