import React from "react";

const NotFound = () => {
  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    color: "#343a40",
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "5rem",
    margin: "0",
  };

  const subTextStyle = {
    fontSize: "1.5rem",
    margin: "10px 0",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={subTextStyle}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button style={buttonStyle} onClick={handleGoHome}>
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
