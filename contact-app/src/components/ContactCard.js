import React from "react";
import user from "../images/user.png";
const ContactCard=(props)=>{
    var {id,name,email} = props.contact;
    return(
        <div className="item">
            <img className="ui avtar image" style={{height:"50px", width:"80px"}} src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i 
                style={{color:"red",marginTop:"7px"}} 
                className="trash alternate outline icon" 
                onClick={()=>{
                    props.clickHander(id)
                }}
            ></i>
        </div>
    );
};
export default ContactCard;