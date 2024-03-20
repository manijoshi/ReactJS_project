import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContactHandler=()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const {id,name,email} = location.state.contact;
    const [newName,setNewName]=useState(name);
    const [newEmail,setNewEmail] = useState(email);
    const {editContactHandler} = useContactsCrud();
    
    const update=(e)=>{
        e.preventDefault();
        if(newName===""||newEmail===""){
            alert("All the fields are mandatory")
        }
        editContactHandler({id,newName,newEmail});
        setNewName("");
        setNewEmail("");
        navigate("/");
    }
    return(
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input type="text"
                        name="name"
                        value={newName}
                        placeholder="Name"
                        onChange={(e)=>setNewName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text"
                        name="email"
                        value={newEmail}
                        placeholder="Email"
                        onChange={(e)=>setNewEmail(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    )
}
export default EditContactHandler;