
import React,{ useEffect, useState } from "react";
import AdminShell from "../components/AdminShell";
import { api } from "../../services/api";

function InquiryTable({type}) {
  const [items,setItems]=useState([]);
  const [error,setError]=useState("");
  async function load(){try{setItems(type==="admissions"?await api.listAdmissions():await api.listContacts())}catch(e){setError(e.message)}}
  useEffect(()=>{load()},[]);
  async function status(id,status){try{if(type==="admissions") await api.updateAdmission(id,{status}); else await api.updateContact(id,{status}); load()}catch(e){setError(e.message)}}
  return <>{error&&<div className="admin-error">{error}</div>}<div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Name</th><th>Contact</th><th>Message</th><th>Status</th></tr></thead><tbody>
    {items.map(x=><tr key={x._id}><td><b>{type==="admissions"?x.parentName:x.name}</b>{type==="admissions"&&<small className="cell-sub">Student: {x.studentName} • {x.classApplying}</small>}</td><td>{x.phone}<br/>{x.email}</td><td>{x.message || "—"}</td><td><select value={x.status} onChange={e=>status(x._id,e.target.value)}><option>new</option><option>read</option><option>contacted</option><option>replied</option><option>completed</option></select></td></tr>)}
  </tbody></table>{!items.length&&<div className="admin-empty">No enquiries yet.</div>}</div></>;
}
export function Admissions(){return <AdminShell title="Admissions"><InquiryTable type="admissions"/></AdminShell>}
export function Contacts(){return <AdminShell title="Contact Messages"><InquiryTable type="contacts"/></AdminShell>}
