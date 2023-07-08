import React, {useContext, useRef, useEffect} from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactFilter(){
    const contactContext=useContext(ContactContext);
    const text=useRef();
    const {filterContacts, clearFilter, filtered}=contactContext;

    useEffect(()=>{
        if(filtered===null){
            text.current.value="";
        }
    });

    function onChange(e){
        if(text.current.value!==""){
            filterContacts(e.target.value);
        }
        else{
            clearFilter();
        }
    }
    return(
        <form>
            <input ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange}/>
        </form>
    )
}

export default ContactFilter;