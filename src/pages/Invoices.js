import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { getInvoices } from "../data";


export default function Invoices() {
   let invoices= getInvoices()
   const location = useLocation()
   let [state, setState]= useState(location.state)
   const navigate = useNavigate()
    console.log(location)
    useEffect(()=>{
      if(state){
        alert(state)
        setState('')
      } 
      return ()=>{
           navigate(location.pathname, {replace:true})
        }
      
    },[])
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
        {invoices?.map(invoice => <div><Link to={`${invoice.number}`}>{invoice.name}</Link></div>)}
        <Outlet/>
      </main>
    );
  }
