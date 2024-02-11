import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function FloatingButton({ setOpen }) {
  const setEnvelop = () => {
    setOpen(true);
  }

  return (
    <div className="floating-button" onClick={setEnvelop}>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
}

export default FloatingButton;
