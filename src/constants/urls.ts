const baseURL = 'https://dummyjson.com'

const urls = {
    users:{
        getAllUsers: baseURL + '/users',
        getUser: (id:number) => urls.users.getAllUsers + '/' + id
    },
    posts:{
        getAllPosts: baseURL + '/posts',
        getPost: (id:number) => urls.posts.getAllPosts + '/' + id
    }
}

export {urls}