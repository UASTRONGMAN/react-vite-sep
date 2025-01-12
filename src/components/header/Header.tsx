import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Link to={''}>Home</Link> <br/>
            <Link to={'/users'}>Users</Link> <br/>
            <Link to={'/posts'}>Posts</Link>
        </div>
    );
};

export default Header;