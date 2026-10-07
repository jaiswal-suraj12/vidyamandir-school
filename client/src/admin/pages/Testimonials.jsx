import React from "react";
import AdminShell from "../components/AdminShell"; 
import CrudPage from "../components/CrudPage";
export default function Testimonials()
{return <AdminShell title="Testimonials"><CrudPage resource="testimonials" title="Testimonials" fields={["parentName","studentClass","message","rating","photoUrl"]}/></AdminShell>}