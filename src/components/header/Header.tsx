import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Link to={''}>Home</Link>
            <br/>
            <Link to={'/cars'}>Cars</Link>
            <br/>
            <Link to={'/form'}>Form</Link>
        </div>
    );
};

export default Header;