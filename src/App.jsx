import React, { useEffect, useState } from "react";

function App() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    // Example API call
    fetch("http://127.0.0.1:8000/api/sample/")
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message || "Welcome!"))
      .catch(() => setApiMessage("Welcome to SnakeIT Technologies!"));
  }, []);

  const sectionStyle = (bg) => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: bg,
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "2rem",
  });

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "0.5rem",
    border: "none",
    backgroundColor: "#ff4081",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s, background 0.3s",
    marginTop: "1rem",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.backgroundColor = "#ff1f70";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.backgroundColor = "#ff4081";
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={sectionStyle("linear-gradient(135deg, #6b73ff, #000dff)")}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          SnakeIT Technologies
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>{apiMessage}</p>
        <button style={buttonStyle} onMouseOver={hoverEffect} onMouseOut={hoverOut}>
          Get a Consultation
        </button>
      </section>

      {/* Services Section */}
      <section style={sectionStyle("linear-gradient(135deg, #ff6b6b, #f06595)")}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Our Services</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ background: "#fff", color: "#000", padding: "1rem 2rem", borderRadius: "0.5rem", minWidth: "200px" }}>
            <h3>IT Consulting</h3>
            <p>Expert advice to optimize your IT strategy and infrastructure.</p>
          </div>
          <div style={{ background: "#fff", color: "#000", padding: "1rem 2rem", borderRadius: "0.5rem", minWidth: "200px" }}>
            <h3>Staffing Solutions</h3>
            <p>Find the right talent for your IT projects, fast and reliable.</p>
          </div>
          <div style={{ background: "#fff", color: "#000", padding: "1rem 2rem", borderRadius: "0.5rem", minWidth: "200px" }}>
            <h3>Custom Software</h3>
            <p>Build scalable software solutions tailored to your business needs.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={sectionStyle("linear-gradient(135deg, #42e695, #3bb2b8)")}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Us</h2>
        <p style={{ maxWidth: "600px", fontSize: "1.2rem" }}>
          SnakeIT Technologies is your trusted partner in IT consulting and staffing.
          We combine industry expertise with cutting-edge technology to deliver
          exceptional results for businesses of all sizes.
        </p>
      </section>

      {/* Contact Section */}
      <section style={sectionStyle("linear-gradient(135deg, #fcb045, #fd1d1d)")}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact Us</h2>
        <p>Email: contact@snakeit.com</p>
        <p>Phone: +1 123 456 7890</p>
        <button style={buttonStyle} onMouseOver={hoverEffect} onMouseOut={hoverOut}>
          Send a Message
        </button>
      </section>
    </div>
  );
}

export default App;
