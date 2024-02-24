import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white p-4 border-b border-gray-600 '>
      <div className='flex items-center'>
        <a href="/" className="site-title" style={{ color: '#00df9a', fontWeight: 'bold', fontSize: '1.5rem' }}>
          HarmonyHands.
        </a>
      </div>
      <div className='flex items-center'>
        {!expanded && (
          <Button
            onClick={handleButtonClick}
            style={{ color: 'white', fontSize: '1rem', marginLeft: '16px' }}
          >
            Menu
          </Button>
        )}
        <Box display={expanded ? 'block' : 'none'}>
          <ul className='flex' style={{ marginLeft: '16px' }}>
          <li style={{ marginRight: '12px' }}>
              <a href="/Translation" style={{ color: 'white', fontSize: '1.15rem', display: "flex", justifyContent: "space-between" }}>
                Translation
              </a>
            </li>
            <li style={{ marginRight: '12px' }}>
              <a href="/Learning" style={{ color: 'white', fontSize: '1.15rem', display: "flex", justifyContent: "space-between" }}>
                Learning
              </a>
            </li>
            <li style={{ marginRight: '12px' }}>
              <a href="/Tutoring" style={{ color: 'white', fontSize: '1.15rem', display: "flex", justifyContent: "space-between" }}>
                Tutoring
              </a>
            </li>
            <li style={{ marginRight: '12px' }}>
              <a href="/Contact" style={{ color: 'white', fontSize: '1.15rem', display: "flex", justifyContent: "space-between" }}>
                Contact
              </a>
            </li>
            <li style={{ marginRight: '12px' }}>
              <a href="/Signup" style={{ color: 'white', fontSize: '1.15rem', display: "flex", justifyContent: "space-between" }}>
                Signup
              </a>
            </li>
            <li style={{ marginRight: '12px' }}>
              <a href="/Login" style={{ color: 'white', fontSize: '1.15rem', display: "flex", justifyContent: "space-between" }}>
                Login
              </a>
              </li>
          </ul>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
