import React, { useEffect, useState } from "react";
import EnglishPdf from "../../Assets/Documents/Brochures/KRISAT-English-Brochure.pdf";
import TamilPdf from "../../Assets/Documents/Brochures/KRISAT-Tamil Brochure.pdf";
import "./AdmissionModal.scss";

const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleDownload = (lang) => {
    const link = document.createElement("a");
    if (lang === "eng") {
      link.href = EnglishPdf;
      link.download = "College-Brochure-English-2024-2025.pdf"; // Desired filename
    }
    if (lang === "tam") {
      link.href = TamilPdf;
      link.download = "College-Brochure-Tamil-2024-2025.pdf"; // Desired filename
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        <h2 className="modal-title">🎓 Admissions Open!</h2>
        <p className="modal-text">
          We’re accepting applications for the 2024–2025 academic year. Secure
          your seat today!
        </p>
        <p className="modal-call">
          📞 Call Now: <a href="tel:9095900203">9095900203</a> /{" "}
          <a href="tel:9095900206">9095900206</a>
        </p>
        <div className="modal-action">
          <button
            onClick={() => handleDownload("eng")}
            className="brochure-button"
          >
            📥 English Brochure
          </button>
          <button
            onClick={() => handleDownload("tam")}
            className="brochure-button"
          >
            📥 Tamil Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;
