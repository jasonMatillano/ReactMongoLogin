const Home = () => {
    // Inline styles
    const containerStyles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Full viewport height
      backgroundColor: "#f0f0f0", // Light background color
    };
  
    const headingStyles = {
      fontSize: "2.5rem",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#fff", // White background for heading
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    };
  
    return (
      <div style={containerStyles}>
        <h1 style={headingStyles}>Welcome to Homepage</h1>
      </div>
    );
  };
  
  export default Home;
  