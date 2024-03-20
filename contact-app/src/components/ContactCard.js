import React from "react";
import user from "../images/user.png";
import { useContactsCrud } from "../context/ContactsCrudContext";
import {Link} from "react-router-dom";
const ContactCard=(props)=>{
    const {id,name,email} = props.contact;
    const {removeContactHandler} = useContactsCrud();
    const deleteContact=(id)=>{
        removeContactHandler(id);
    }
    return(
        <div className="item">
            <img className="ui avtar image" style={{height:"50px", width:"80px"}} src={user} alt="user" />
            <div className="content">
                <Link to={`/contact/${id}`} state={{contact:props.contact}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i 
                style={{color:"red",marginTop:"7px"}} 
                className="trash alternate outline icon" 
                onClick={()=>deleteContact(id)}
            ></i>
            <Link to="/edit" state={{contact:props.contact}}>
                <i 
                    style={{color:"blue",marginTop:"7px"}} 
                    className="edit alternate outline icon"
                ></i>
            </Link>
        </div>
    );
};
export default ContactCard;