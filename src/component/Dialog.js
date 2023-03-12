import React,{useEffect, useState} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import '../index.css';
import { useNavigate } from "react-router-dom";

function DialogBox({data}){

    const [openDialog,handleDisplay] =useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        handleDisplay(true);
    },[])
  
    const handleClose = ()=>{
        handleDisplay(false);
    }
  
    const handleConfirm = ()=>{
        localStorage.setItem(new Date().toString(), JSON.stringify(data));
          navigate('/success');
    }
    
    return (
        <>
           <Dialog onClose = {handleClose} open = {openDialog}>
           <DialogTitle> Confirm Dialog </DialogTitle>
            <h3 style = {{ color:"black", marginTop: "-10px", padding: "5px 10px" }}>
                  Are you sure want to save the Survey ? {" "}
            </h3>
            
            <div  style={{display:"flex"}} className="divStyle">
               <button style={{width:"25%", marginRight:"45%",marginLeft:"2%"}} className="confirmButtonStyle" onClick = {handleConfirm}>
                  Confirm
               </button>
               <button style={{width: "25%"}} className = "confirmButtonStyle" onClick = {handleClose}>
                  Cancel
               </button>
            </div>  
           </Dialog>
        </>
     );

}

export default DialogBox;