import React from "react";
import AdminShell from "../components/AdminShell"; 
import CrudPage from "../components/CrudPage";
export default function Events()
{return <AdminShell title="Events"><CrudPage resource="events" title="Events" fields={["title","date","description","imageUrl"]}/></AdminShell>}