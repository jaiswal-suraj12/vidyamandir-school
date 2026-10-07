import React, { useEffect, useState } from "react";
import {
  ArrowRight, BookOpen,  CalendarDays, CheckCircle2,
  GraduationCap, Menu, ShieldCheck, Star, Target, Users, X, Trophy
} from "lucide-react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import Events from "./admin/pages/Events";
import Gallery from "./admin/pages/Gallery";
import Facilities from "./admin/pages/Facilities";
import Testimonials from "./admin/pages/Testimonials";
import { Admissions, Contacts } from "./admin/pages/Inquiries";


const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const programs = [
  [
    "Early Learning",
    "Play Group – UKG",
    "A nurturing environment focused on communication, creativity and play-based learning.",
    BookOpen,
  ],
  [
    "Primary Education",
    "Classes I – V",
    "Students build strong foundations through engaging and activity-based learning.",
    GraduationCap,
  ],
  [
    "Middle School",
    "Classes VI – VII",
    "Students develop deeper subject knowledge, logical thinking and independent learning skills.",
    Target,
  ],
];

const features = [
  ["Quality Education", "Building a strong foundation for life", GraduationCap],
  ["Experienced Faculty", "Dedicated teachers for better tomorrow", Users],
  ["Modern Infrastructure", "Safe, smart and well-equipped campus", BookOpen],
  ["Safe & Secure", "A protected environment for every child", ShieldCheck],
  ["Holistic Development", "Academic, cultural and moral values", Star],
  ["Bright Future", "Nurturing talent for a better tomorrow", Target],
];

function TopBar() {
  return <div className="topbar">
    <span>📍Bajitpur, Madhuban(Bihar)</span>
    <span>☎ +91 9453XXXX67</span>
    <span>✉ abvm.bazitpur@gmail.com</span>
    <span className="socials">f&nbsp;&nbsp; ◎ &nbsp;▶</span>
  </div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About Us", "Academics", "Admissions", "Facilities", "Gallery", "News & Events", "Contact"];

  return <header className="navbar">
    <div className="brand">
      <div className="logo">
        <img
          src="/images/school-logo.png"
          alt="Awasiya Bal Vidya Mandir School logo"
        />
      </div>
      <div>
        <strong>Awasiya Bal Vidya Mandir</strong>
        <strong>School, Bajitpur</strong>
      </div>
    </div>

    <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
      {open ? <X /> : <Menu />}
    </button>

    <nav className={open ? "nav-links open" : "nav-links"}>
      {links.map((link, i) => {
        const targets = {
          "Home": "home",
          "About Us": "about-us",
          "Academics": "academics",
          "Admissions": "admissions",
          "Facilities": "facilities",
          "Gallery": "gallery",
          "News & Events": "events",
          "Contact": "contact-us",
        };

        return (
          <a
            href={`#${targets[link]}`}
            key={link}
            onClick={() => setOpen(false)}
            className={i === 0 ? "active" : ""}
          >
            {link}
          </a>
        );
      })}
      <a className="admission-btn" href="#admissions">Admission Enquiry <ArrowRight size={16} /></a>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-overlay" />
    <div className="hero-content">
      <div className="eyebrow">Learn &nbsp; • &nbsp; Grow &nbsp; • &nbsp; Succeed</div>
      <h1>Awasiya Bal Vidya Mandir<br />School, Bajitpur</h1>
      <div className="class-pill">CLASS - PLAY TO VII<sup>th</sup></div>
      <h3>Based on CBSE Curriculum<br />English Medium School</h3>
      <p>Nurturing young minds with knowledge, values and a brighter future.</p>
      <div className="hero-actions">
        <a href="#admissions" className="primary-btn">Admission Enquiry <ArrowRight size={18} /></a>
        {/* <a href="#about" className="secondary-btn">▶ &nbsp; Watch Video</a> */}
        <a href="#about-us" className="secondary-btn">
          Learn More <ArrowRight size={18} />
        </a>
      </div>
    </div>
    <div className="hero-image">
      <img
        src="/images/hero-school.jpg"
        alt="Students at Awasiya Bal Vidya Mandir School"
      />
    </div>
  </section>;
}

function FeatureCards() {
  return <section className="features">
    {features.map(([title, text, Icon]) => <div className="feature-card" key={title}>
      <div className="icon-circle"><Icon size={27} /></div>
      <h3>{title}</h3><p>{text}</p>
    </div>)}
  </section>;
}

function About() {
  return <section className="section about" id="about-us">
    <div className="campus-image">
      <img
        src="/images/about-school.jpg"
        alt="Awasiya Bal Vidya Mandir School campus"
      />
    </div>
    <div className="about-copy">
      <span className="section-label">About Our School</span>
      <h2>Awasiya Bal Vidya Mandir School, Bajitpur</h2>
      <p>Awasiya Bal Vidya Mandir School is committed to providing quality education that empowers students to become confident, compassionate and responsible individuals. Our child-centric approach, modern teaching methods and dedicated faculty help every student achieve their best.</p>
      {/* <div className="stats-mini">
        <div><CalendarDays /><b>2018</b><small>Established</small></div>
        <div><Users /><b>1,500+</b><small>Students</small></div>
        <div><GraduationCap /><b>20+</b><small>Faculty</small></div>
      </div> */}
      <div className="stats-mini">
        <div>
          <CalendarDays />
          <b>Play – VII</b>
          <small>Classes Offered</small>
        </div>

        <div>
          <Users />
          <b>English</b>
          <small>Medium of Instruction</small>
        </div>

        <div>
          <GraduationCap />
          <b>CBSE</b>
          <small>Curriculum Based</small>
        </div>
      </div>


      <a href="#contact-us" className="outline-btn">
        Contact Us <ArrowRight size={17} />
      </a>
    </div>
  </section>;
}

function Academics() {
  return (
    <section className="section academics" id="academics">
      <div className="academic-intro">
        <span className="section-label">Our Academic Programs</span>

        <h2>Academic Excellence Across All Levels</h2>

        <p>
          We provide a supportive learning journey focused on academic
          development, creativity, confidence and personal growth.
        </p>

        <a href="#admissions" className="dark-btn">
          View All Programs
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>

      <div className="program-grid">
        {programs.map(([title, grade, text, Icon]) => (
          <article className="program-card" key={title}>
            <div className="program-icon">
              <Icon size={28} aria-hidden="true" />
            </div>

            <h3>{title}</h3>

            <b>{grade}</b>

            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


function WhyChooseUs() {
  return (
    <section className="why" id="why-choose-us">
      <div className="why-content">
        <span className="section-label yellow">
          Why Choose Us
        </span>

        <h2>More Than Just a School</h2>

        <p>
          We aim to create a supportive learning environment where
          students develop knowledge, confidence, character and strong
          values for the future.
        </p>

        <a href="#about-us" className="secondary-btn">
          Discover More
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>

      <div className="big-stats">
        <div>
          <b>Play – VII</b>
          <span>Classes Offered</span>
        </div>

        <div>
          <b>English</b>
          <span>Medium of Instruction</span>
        </div>

        <div>
          <b>CBSE</b>
          <span>Curriculum Based</span>
        </div>

        <div>
          <b>Holistic</b>
          <span>Student Development</span>
        </div>
      </div>
    </section>
  );
}
function TestimonialContent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const response = await fetch(`${API_URL}/testimonials`);

        if (!response.ok) {
          throw new Error("Failed to load testimonials");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setItems(
            data.filter((item) => item.published !== false)
          );
        }
      } catch (error) {
        console.error("Testimonials loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="gallery-empty">
        Loading testimonials...
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="gallery-empty">
        No testimonials available yet.
      </div>
    );
  }

  const item = items[0];

  return (
    <>
      <div className="quote">
        “{item.message || item.text || item.description}”
      </div>

      <b>
        {item.name || item.parentName || "Parent"}
      </b>

      <small>
        {item.role ||
          item.designation ||
          "Parent of a Student"}
      </small>
    </>
  );
}

function AdmissionForm() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    classApplying: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch( `${API_URL}/admissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit admission enquiry"
        );
      }

      setStatus(
        "success"
      );

      setForm({
        studentName: "",
        parentName: "",
        classApplying: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Admission enquiry error:", error);

      setStatus(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      className="section admission-section"
      id="admissions"
    >
      <div className="admission-intro">
        <span className="section-label">
          Admissions Open
        </span>

        <h2>
          Give Your Child
          <br />
          the Right Start
        </h2>

        <p>
          Take the first step toward a bright future.
          Submit an admission enquiry and our school
          team will contact you.
        </p>

        <div className="admission-points">
          <div>
            <CheckCircle2 size={20} />
            <span>English Medium Education</span>
          </div>

          <div>
            <CheckCircle2 size={20} />
            <span>Child-Centered Learning</span>
          </div>

          <div>
            <CheckCircle2 size={20} />
            <span>Safe & Supportive Campus</span>
          </div>
        </div>
      </div>

      <form
        className="admission-form"
        onSubmit={handleSubmit}
      >
        <h3>Admission Enquiry</h3>

        <p className="form-subtitle">
          Please provide your details below.
        </p>

        <div className="form-grid">
          <label>
            Student Name *
            <input
              type="text"
              value={form.studentName}
              onChange={(e) =>
                updateField(
                  "studentName",
                  e.target.value
                )
              }
              required
              placeholder="Enter student name"
            />
          </label>

          <label>
            Parent / Guardian Name *
            <input
              type="text"
              value={form.parentName}
              onChange={(e) =>
                updateField(
                  "parentName",
                  e.target.value
                )
              }
              required
              placeholder="Enter parent name"
            />
          </label>

          <label>
            Class *
            <input
              type="text"
              value={form.classApplying}
              onChange={(e) =>
                updateField(
                  "classApplying",
                  e.target.value
                )
              }
              required
              placeholder="e.g. Class 5"
            />
          </label>

          <label>
            Phone *
            <input
              type="tel"
              value={form.phone}
              onChange={(e) =>
                updateField(
                  "phone",
                  e.target.value
                )
              }
              required
              placeholder="Enter phone number"
            />
          </label>

          <label className="full-width">
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                updateField(
                  "email",
                  e.target.value
                )
              }
              placeholder="Enter email address"
            />
          </label>

          <label className="full-width">
            Message
            <textarea
              value={form.message}
              onChange={(e) =>
                updateField(
                  "message",
                  e.target.value
                )
              }
              rows="4"
              placeholder="Any questions or additional information?"
            />
          </label>
        </div>

        {status === "success" && (
          <div className="form-success">
            ✓ Your admission enquiry has been submitted
            successfully. Our team will contact you soon.
          </div>
        )}

        {status && status !== "success" && (
          <div className="form-error">
            {status}
          </div>
        )}

        <button
          type="submit"
          className="primary-btn form-submit"
          disabled={submitting}
        >
          {submitting
            ? "Submitting..."
            : "Submit Enquiry"}

          {!submitting && <ArrowRight size={18} />}
        </button>
      </form>
    </section>
  );
}
function News() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const response = await fetch(`${API_URL}/events`);

        if (!response.ok) {
          throw new Error("Failed to load events");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setItems(data);
        }
      } catch (error) {
        console.error("Events loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  const publishedEvents = items.filter(
  (item) => item.published !== false
);
  return (
    <section className="section news" id="events">
      {/* EVENTS */}
      <div className="news-list">
        <div className="section-heading">
          <div>
            <span className="section-label">
              Latest News & Events
            </span>

            <h2>Stay Updated</h2>
          </div>
        </div>

        {loading ? (
          <div className="gallery-empty">
            Loading events...
          </div>
        ) : publishedEvents. length === 0 ? (
          <div className="gallery-empty">
            No events available yet.
          </div>
        ) : (
          
            publishedEvents.slice(0, 6).map((item) => {
              const eventDate = item.date
                ? new Date(item.date)
                : null;

              return (
                <div
                  className="news-item"
                  key={item._id}
                >
                  <div className="date">
                    <b>
                      {eventDate
                        ? eventDate.getDate()
                        : "—"}
                    </b>

                    <small>
                      {eventDate
                        ? eventDate
                          .toLocaleString(
                            "en-US",
                            {
                              month: "short",
                            }
                          )
                          .toUpperCase()
                        : ""}
                    </small>
                  </div>

                  <div>
                    <b>{item.title}</b>

                    {item.description && (
                      <p>{item.description}</p>
                    )}

                    {item.location && (
                      <small className="event-location">
                        📍 {item.location}
                      </small>
                    )}
                  </div>
                </div>
              );
            })
        )}
      </div>

      {/* TESTIMONIALS */}
      <div className="testimonial">
        <span className="section-label">
          What Parents Say
        </span>

        <h2>Testimonials</h2>

        <TestimonialContent />
      </div>


    </section>
  );
}
function FacilitiesSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFacilities() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/facilities`);

        if (!response.ok) {
          throw new Error("Failed to load facilities");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setItems(data);
        } else {
          setItems([]);
        }
      } catch (error) {
        console.error("Facilities loading error:", error);
        setError("Unable to load facilities right now.");
        setItems([]);
      } finally {
        setLoading(false);
      }
    }

    loadFacilities();
  }, []);

  const publishedFacilities = items.filter(
    (item) => item.published !== false
  );

  return (
    <section className="section facilities-section" id="facilities">
      <div className="section-heading">
        <div>
          <span className="section-label">Our Facilities</span>
          <h2>Learning Beyond the Classroom</h2>
        </div>
      </div>

      {loading ? (
        <div className="gallery-empty">
          Loading facilities...
        </div>
      ) : error ? (
        <div className="gallery-empty">
          {error}
        </div>
      ) : publishedFacilities.length === 0 ? (
        <div className="gallery-empty">
          No facilities available yet.
        </div>
      ) : (
        <div className="public-facilities-grid">
          {publishedFacilities.map((item) => (
            <article
              className="public-facility-card"
              key={item._id}
            >
              {item.imageUrl && (
                <div className="public-facility-image">
                  <img
                    src={item.imageUrl}
                    alt={item.title || "School facility"}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}

              <div className="public-facility-info">
                <h3>{item.title || "School Facility"}</h3>

                {item.description && (
                  <p>{item.description}</p>
                )}

                {item.category && (
                  <span>{item.category}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}


function GallerySection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGallery() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`${API_URL}/gallery`);

        if (!response.ok) {
          throw new Error("Failed to load gallery");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setItems(data);
        } else {
          setItems([]);
        }
      } catch (error) {
        console.error("Gallery loading error:", error);
        setError("Unable to load gallery right now.");
        setItems([]);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  const publishedGallery = items.filter(
    (item) => item.published !== false
  );

  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-heading">
        <div>
          <span className="section-label">School Gallery</span>
          <h2>Our School Moments</h2>
        </div>
      </div>

      {loading ? (
        <div className="admin-empty">
          Loading gallery...
        </div>
      ) : error ? (
        <div className="gallery-empty">
          {error}
        </div>
      ) : publishedGallery.length === 0 ? (
        <div className="gallery-empty">
          No gallery images available yet.
        </div>
      ) : (
        <div className="public-gallery-grid">
          {publishedGallery.map((item) => (
            <article
              className="public-gallery-card"
              key={item._id}
            >
              <div className="public-gallery-image">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title || "School gallery"}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="gallery-empty">
                    Image unavailable
                  </div>
                )}
              </div>

              <div className="public-gallery-info">
                <h3>{item.title || "School Moment"}</h3>

                {item.category && (
                  <span>{item.category}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(`${API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send message"
        );
      }

      setStatus("success");

      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section contact-section" id="contact-us">
      <div className="contact-intro">
        <span className="section-label">
          Get In Touch
        </span>

        <h2>We're Here to Help</h2>

        <p>
          Have a question about admissions, academics,
          facilities or anything else? Send us a message
          and our school team will get back to you.
        </p>

        <div className="contact-details">
          <div>
            <span>📍</span>
            <div>
              <b>Address</b>
              <p>Bajitpur, Madhuban, Bihar</p>
            </div>
          </div>

          <div>
            <span>☎</span>
            <div>
              <b>Phone</b>
              <p>+91 9453XXXX67</p>
            </div>
          </div>

          <div>
            <span>✉</span>
            <div>
              <b>Email</b>
              <p>abvm.bazitpur@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <h3>Send Us a Message</h3>

        <p className="form-subtitle">
          Fill in the form and we'll contact you soon.
        </p>

        <div className="form-grid">
          <label>
            Your Name *
            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                updateField("name", e.target.value)
              }
              required
              placeholder="Enter your name"
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              value={form.phone}
              onChange={(e) =>
                updateField("phone", e.target.value)
              }
              placeholder="Enter phone number"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
              placeholder="Enter email address"
            />
          </label>

          <label>
            Subject
            <input
              type="text"
              value={form.subject}
              onChange={(e) =>
                updateField(
                  "subject",
                  e.target.value
                )
              }
              placeholder="What is this about?"
            />
          </label>

          <label className="full-width">
            Message *
            <textarea
              value={form.message}
              onChange={(e) =>
                updateField(
                  "message",
                  e.target.value
                )
              }
              required
              rows="5"
              placeholder="Write your message..."
            />
          </label>
        </div>

        {status === "success" && (
          <div className="form-success">
            ✓ Your message has been sent successfully.
            We'll get back to you soon.
          </div>
        )}

        {status && status !== "success" && (
          <div className="form-error">
            {status}
          </div>
        )}

        <button
          type="submit"
          className="primary-btn form-submit"
          disabled={submitting}
        >
          {submitting
            ? "Sending..."
            : "Send Message"}

          {!submitting && <ArrowRight size={18} />}
        </button>
      </form>
    </section>
  );
}
function Footer() {
  const footerLinks = [
    ["Home", "home"],
    ["About Us", "about-us"],
    ["Academics", "academics"],
    ["Admissions", "admissions"],
    ["Facilities", "facilities"],
    ["Gallery", "gallery"],
    ["News & Events", "events"],
    ["Contact", "contact-us"],
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/images/school-logo.png"
              alt="Awasiya Bal Vidya Mandir School logo"
            />
          </div>
          <div>
            <b>Awasiya Bal Vidya Mandir School</b>
            <span>Learn • Grow • Succeed</span>
          </div>
        </div>

        <div className="footer-links">
          {footerLinks.map(([label, target]) => (
            <a key={target} href={`#${target}`}>
              {label}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <p>Bajitpur, (Madhuban) Bihar</p>
          <p>Phone: +91 9453XXXX67</p>
          <p>Email: abvm.bazitpur@gmail.com</p>
        </div>
      </div>

      <div className="copyright">
        © 2026 Awasiya Bal Vidya Mandir School, Bajitpur (Madhuban) Bihar. All rights reserved.
      </div>
    </footer>
  );
}

function PublicSite() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <FeatureCards />
        <About />
        <Academics />
        <WhyChooseUs />
        <FacilitiesSection />
        <GallerySection />
        <News />
        <AdmissionForm />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}


function AdminGuard({ children }) {
  return localStorage.getItem("abvm_token") ? children : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return <Routes>
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<AdminGuard><Dashboard /></AdminGuard>} />
    <Route path="/admin/events" element={<AdminGuard><Events /></AdminGuard>} />
    <Route path="/admin/gallery" element={<AdminGuard><Gallery /></AdminGuard>} />
    <Route path="/admin/facilities" element={<AdminGuard><Facilities /></AdminGuard>} />
    <Route path="/admin/testimonials" element={<AdminGuard><Testimonials /></AdminGuard>} />
    <Route path="/admin/admissions" element={<AdminGuard><Admissions /></AdminGuard>} />
    <Route path="/admin/contacts" element={<AdminGuard><Contacts /></AdminGuard>} />
    <Route path="*" element={<PublicSite />} />

  </Routes>;
}
