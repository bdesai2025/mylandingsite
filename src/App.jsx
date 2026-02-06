import React, { useEffect, useState } from "react";

function App() {
  const [apiMessage, setApiMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/sample/")
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message || "Welcome!"))
      .catch(() => setApiMessage("Welcome to SnakeIT Technologies!"))
      .finally(() => setLoading(false));
  }, []);

  const sectionStyle = (bg) => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: bg,
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    padding: "3rem 2rem",
    transition: "all 0.5s ease",
  });

  const buttonStyle = {
    padding: "0.75rem 2rem",
    fontSize: "1.1rem",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "#ff4081",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "1.5rem",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transform = "scale(1.15)";
    e.currentTarget.style.backgroundColor = "#ff1f70";
    e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.4)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.backgroundColor = "#ff4081";
    e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.3)";
  };

  const fadeIn = {
    opacity: loading ? 0 : 1,
    transition: "opacity 1s ease-in",
  };

  return (
    <div>
      {/* Navigation */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", background: "#000",
        padding: "1rem 2rem", display: "flex", justifyContent: "center", zIndex: 10
      }}>
        <a href="#hero" style={{ color: "#fff", margin: "0 1rem", textDecoration: "none", fontWeight: "bold" }}>Home</a>
        <a href="#services" style={{ color: "#fff", margin: "0 1rem", textDecoration: "none", fontWeight: "bold" }}>Services</a>
        <a href="#about" style={{ color: "#fff", margin: "0 1rem", textDecoration: "none", fontWeight: "bold" }}>About</a>
        <a href="#contact" style={{ color: "#fff", margin: "0 1rem", textDecoration: "none", fontWeight: "bold" }}>Contact</a>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ ...sectionStyle("linear-gradient(135deg, #6b73ff, #000dff)"), ...fadeIn }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>SnakeIT Technologies</h1>
        <p style={{ fontSize: "1.6rem", marginBottom: "2rem" }}>
          {loading ? "Loading..." : apiMessage}
        </p>
        <button style={buttonStyle} onMouseOver={hoverEffect} onMouseOut={hoverOut}>
          Get a Consultation
        </button>
      </section>

      {/* Services Section */}
      <section id="services" style={{ ...sectionStyle("linear-gradient(135deg, #ff6b6b, #f06595)") }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Our Services</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { title: "IT Consulting", desc: "Expert advice to optimize your IT strategy and infrastructure." },
            { title: "Staffing Solutions", desc: "Find the right talent for your IT projects, fast and reliable." },
            { title: "Custom Software", desc: "Build scalable software solutions tailored to your business needs." },
          ].map((s, idx) => (
            <div key={idx} style={{
              background: "#fff",
              color: "#000",
              padding: "2rem",
              borderRadius: "1rem",
              minWidth: "220px",
              maxWidth: "300px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.3s",
            }} onMouseOver={e => e.currentTarget.style.transform = "translateY(-10px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ ...sectionStyle("linear-gradient(135deg, #42e695, #3bb2b8)") }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>About Us</h2>
        <p style={{ maxWidth: "650px", fontSize: "1.3rem", lineHeight: "1.6rem" }}>
          SnakeIT Technologies is your trusted partner in IT consulting and staffing. We combine industry expertise with cutting-edge technology to deliver exceptional results for businesses of all sizes.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ ...sectionStyle("linear-gradient(135deg, #fcb045, #fd1d1d)") }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Contact Us</h2>
        <p>Email: <a href="mailto:contact@snakeit.com" style={{ color: "#fff" }}>contact@snakeit.com</a></p>
        <p>Phone: +1 123 456 7890</p>
        <button style={buttonStyle} onMouseOver={hoverEffect} onMouseOut={hoverOut}>
          Send a Message
        </button>
      </section>
    </div>
  );
}

export default App;
