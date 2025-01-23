import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Link to={''}>Home</Link> <br/>
            <Link to={'/auth'}>Authentication page</Link> <br/>
            <Link to={'/products'}>Products page</Link> <br/>
        </div>
    );
};

export default Header;