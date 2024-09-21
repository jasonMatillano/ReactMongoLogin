import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const buttonContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "10px",
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
  };

  const loginButtonStyles = {
    backgroundColor: "#2196F3", // Blue for Login button
  };

  const buttonHoverStyles = {
    backgroundColor: "#45a049", // Hover for Register button
  };

  const loginHoverStyles = {
    backgroundColor: "#1E88E5", // Hover for Login button
  };

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {
            username: username,
            email: email,
            password: password
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === "User already exists") {
            alert("User already exists");
          } else {
            alert("Registration successful");
            navigate("/login")
          }
        })
        .catch((err) => {console.log(err);})
    }

    
    return (
      <div style={formStyles}>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <div style={buttonContainerStyles}>
            <button
              type="submit"
              style={buttonStyles}
              onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
            >
              Register
            </button>
          </div>
        </form>
        <Link to="/login">
            <button
            type="button"
            style={{ ...buttonStyles, ...loginButtonStyles }}
            onMouseOver={(e) => (e.target.style.backgroundColor = loginHoverStyles.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = loginButtonStyles.backgroundColor)}
            >
                Login
            </button>
          </Link>
      </div>
    );
};
  
  export default Signup;
  