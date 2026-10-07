import React, { useEffect, useState } from "react";
import {
  CalendarDays,
  GraduationCap,
  Image,
  MessageSquare,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";

import AdminShell from "../components/AdminShell";
import { api } from "../../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    events: 0,
    gallery: 0,
    admissions: 0,
    contacts: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadDashboard() {
    try {
      setLoading(true);
      setError("");

      const [events, gallery, admissions, contacts] =
        await Promise.all([
          api.list("events"),
          api.list("gallery"),
          api.listAdmissions(),
          api.listContacts(),
        ]);

      setStats({
        events: Array.isArray(events) ? events.length : 0,
        gallery: Array.isArray(gallery) ? gallery.length : 0,
        admissions: Array.isArray(admissions)
          ? admissions.length
          : 0,
        contacts: Array.isArray(contacts)
          ? contacts.length
          : 0,
      });
    } catch (error) {
      console.error("Dashboard loading error:", error);
      setError(
        "Unable to load dashboard statistics. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  const cards = [
    {
      label: "Events",
      value: stats.events,
      icon: CalendarDays,
      to: "/admin/events",
      description: "Manage school news and events",
    },
    {
      label: "Gallery",
      value: stats.gallery,
      icon: Image,
      to: "/admin/gallery",
      description: "Manage school photos",
    },
    {
      label: "Admissions",
      value: stats.admissions,
      icon: GraduationCap,
      to: "/admin/admissions",
      description: "View admission enquiries",
    },
    {
      label: "Messages",
      value: stats.contacts,
      icon: MessageSquare,
      to: "/admin/contacts",
      description: "Manage contact enquiries",
    },
  ];

  return (
    <AdminShell title="Dashboard">
      <div className="welcome-card">
        <div>
          <span>Administration Panel</span>

          <h2>Manage your school website</h2>

          <p>
            Update events, photos, facilities, testimonials and
            enquiries from one place.
          </p>
        </div>
        <div className="welcome-mark">
          <img
            src="/images/school-logo.png"
            alt="Awasiya Bal Vidya Mandir School logo"
          />
        </div>
      </div>

      {error && (
        <div className="admin-error">
          {error}

          <button
            type="button"
            onClick={loadDashboard}
            className="admin-retry-btn"
          >
            <RefreshCw size={16} />
            Retry
          </button>
        </div>
      )}

      <div className="dashboard-grid">
        {cards.map(
          ({
            label,
            value,
            icon: Icon,
            to,
            description,
          }) => (
            <Link
              className="dashboard-card"
              to={to}
              key={label}
            >
              <div className="dash-icon">
                <Icon size={22} />
              </div>

              <div className="dashboard-card-content">
                <span>{label}</span>

                <b>
                  {loading ? "—" : value}
                </b>

                <small>{description}</small>
              </div>

              <ArrowRight
                className="dashboard-card-arrow"
                size={20}
              />
            </Link>
          )
        )}
      </div>

      <div className="admin-note">
        <b>Website management:</b>{" "}
        Use the sections in the admin panel to manage your
        school's events, gallery, facilities, testimonials,
        admission enquiries and contact messages. Published
        content can appear on the public website automatically.
      </div>
    </AdminShell>
  );
}