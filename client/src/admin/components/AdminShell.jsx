
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, CalendarDays, Image, Building2, MessageSquare, GraduationCap, LogOut, Menu, X } from "lucide-react";
import React, { useEffect,useState } from "react";

const links = [
  ["/admin/dashboard", "Dashboard", LayoutDashboard],
  ["/admin/admissions", "Admissions", GraduationCap],
  ["/admin/events", "Events", CalendarDays],
  ["/admin/gallery", "Gallery", Image],
  ["/admin/facilities", "Facilities", Building2],
  ["/admin/testimonials", "Testimonials", MessageSquare],
  ["/admin/contacts", "Messages", MessageSquare]
];

export default function AdminShell({ children, title }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function logout() {
    localStorage.removeItem("abvm_token");
    localStorage.removeItem("abvm_admin");
    navigate("/admin/login");
  }

  return <div className="admin-layout">
    <aside className={open ? "admin-sidebar open" : "admin-sidebar"}>
      <div className="admin-logo">
        <div className="admin-logo-mark large">

            <img
            src="/images/school-logo.png"
            alt="Awasiya Bal Vidya Mandir School Logo"
          />
        </div>

        <div><b>ABVM</b><span>School Admin</span></div>
        <button onClick={() => setOpen(false)} className="admin-close"><X size={19}/></button>
      </div>
      <nav>
        {links.map(([to, label, Icon]) =>
          <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "admin-link active" : "admin-link"}>
            <Icon size={18}/><span>{label}</span>
          </NavLink>
        )}
      </nav>
      <button className="admin-logout" onClick={logout}><LogOut size={18}/> Logout</button>
    </aside>
    <section className="admin-main">
      <header className="admin-header">
        <button className="admin-menu" onClick={() => setOpen(true)}><Menu/></button>
        <div><small>Awasiya Bal Vidya Mandir School</small><h1>{title}</h1></div>
        <div className="admin-user">{JSON.parse(localStorage.getItem("abvm_admin") || '{"name":"Administrator"}').name}</div>
      </header>
      <div className="admin-content">{children}</div>
    </section>
  </div>;
}
