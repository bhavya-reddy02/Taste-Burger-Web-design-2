import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("gdprConsent", "false");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        backgroundColor: "#212529",
        color: "#fff",
        padding: "15px 0",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.5)"
      }}
    >
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-md-0 mb-3 text-center text-md-start">
          We use cookies to ensure you get the best experience on our website.
          By clicking "Accept", you agree to our use of cookies.
        </p>
        <div className="d-flex gap-2">
          <Button variant="outline-light" onClick={handleDecline}>
            Decline
          </Button>
          <Button variant="danger" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CookieBanner;
