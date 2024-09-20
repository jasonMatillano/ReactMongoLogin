// import React, { useState } from "react";

const Signup = () => {

  // Inline styles
  const formStyles = {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "15px",
    boxSizing: "border-box",
  };

  const labelStyles = {
    fontWeight: "bold",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
  };

  const buttonStyles = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const buttonHoverStyles = {
    backgroundColor: "#45a049",
  };

  return (
    <div style={formStyles}>
      <h2>Signup</h2>
      <form>
        <div>
          <label htmlFor="name" style={labelStyles}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"

            required
            style={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyles}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="password" style={labelStyles}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            style={inputStyles}
          />
        </div>

        <button
          type="submit"
          style={buttonStyles}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
