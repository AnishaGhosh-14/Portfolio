import React from 'react';
import ReactDOM from 'react-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CancelIcon from '@mui/icons-material/Cancel';

function Modal({ setOpen }) {
  const closeModal = () => {
    setOpen(false);
  };

  const openNewTab = (url) => {
    window.open(url, '_blank');
  };

  const portalContainer = document.querySelector(".myPortalModalDiv");

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-header">
        <h1 className='p-5 text-orange-500'>Connect with Us</h1>
        <button onClick={closeModal}>
          <CancelIcon />
        </button>
      </div>
      <div className="modal-icons">
        <a
          href="https://github.com/AnishaGhosh-14"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => openNewTab('https://github.com/AnishaGhosh-14')}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/anisha-ghosh-14sep2002/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => openNewTab('https://www.linkedin.com/in/anisha-ghosh-14sep2002/')}
        >
          <LinkedInIcon />
        </a>
        <a
          href="mailto:anishaaa1444@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => openNewTab('mailto:anishaaa1444@gmail.com')}
        >
          <EmailIcon />
        </a>
      </div>
    </div>,
    portalContainer
  );
}

export default Modal;
