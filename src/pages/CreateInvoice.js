import { useState } from "react";
import InvoiceInfo from "./InvoiceInfo";
import { useNavigate, Navigate } from "react-router-dom";
import * as axios from 'axios'
import styled from 'styled-components'
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
const Button= styled.button`
    background:${(props)=>{
        console.log(props)
        if(props.mode=== 'dark')
        return props.active ? props.theme.darkColors.plum: props.theme.darkColors.rose
        else{
            return props.active ? props.theme.colors.plum: props.theme.colors.rose

        }
    }
    };
    border-radius: 5px;
    padding: 15px 8px;

`
export default function CreateInvoice(){
    const [invoice, setInvoice] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [mode, setTheme] = useState('dark')
    function setInfo(e){
        console.log(e)
        if(e.target.name!=="image"){
            console.log("other");
            setInvoice({...invoice, [e.target.name]: e.target.value})
        }else{
            var files = e.target.files[0]
            console.log("image",e.target.files )
            setInvoice({...invoice,[e.target.name]:files})
        }
    }

    function submit(){
        const formData = new FormData();
      
        Object.entries(invoice).map(entry=>{
            console.log(entry)
            formData.append(entry[0], entry[1])
        })
        const res = axios.post('http://localhost:3002/upload', formData, {
           
        }).then(res=>{
            console.log(res)
        })

        fetch('http://localhost:3002/upload', {
            method: 'POST',
            body: formData
          }).then(res=> res.json()).then(res=>{
              console.log(res)
          })
    }

    if(isSubmit){
        return <Navigate  to={"/invoices"} state={"create successfully"} />
    }
    return (<div>
        <input onChange={setInfo} type="text" name="name" placeholder="name" value={invoice.name} />
        <input onChange={setInfo} type="text" name="number" placeholder="number" value={invoice.number} />
        <input onChange={setInfo} type="text" name="amount" placeholder="amount" value={invoice.amount} />
        <input onChange={setInfo} type="text" name="due" placeholder="due" value={invoice.due} />
        <input  onChange={setInfo} type="file"  name="image" id="file" />
        <Button mode={mode} active={false} onClick={submit}>submit</Button>
    </div>)
}