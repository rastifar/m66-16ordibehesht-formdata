import { useParams } from "react-router-dom"
import { getInvoice } from "../data"
import NotFound from "./Notfound"
export default function InvoiceInfo(){
    const params = useParams()
    let data= getInvoice(params.invoiceNumber)

    console.log(params, data)
    if(!data){
        return <NotFound/>
    }
    
    return <div>
        {data.name} <br/>
        {data.number}<br/>
        {data.amount}<br/>
        {data.due}
    </div>
}