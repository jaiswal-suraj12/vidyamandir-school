import React from "react";
import AdminShell from "../components/AdminShell"; 
import CrudPage from "../components/CrudPage";
export default function Facilities()
{return <AdminShell title="Facilities"><CrudPage resource="facilities" title="Facilities" fields={["title","description","icon","imageUrl"]}/></AdminShell>}