import { Link, useLocation } from "react-router-dom";
import user from "../images/user.png";
const ContactDetail=()=>{
    const location = useLocation();
    const {name,email} = location.state.contact;
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="">{name}</div>
                    <div className="">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to='/contacts'>
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default ContactDetail;