import React, { useState, useEffect } from "react";
import ShareComponent from "../../components/ShareComponent";

const MainComponent = () => {
  const [customAddThisUrl, setCustomAddThisUrl] = useState("");
  const [customA2A, setCustomA2A] = useState("");
  const [open, setOpen] = useState(false);
  const [openA2A, setOpenA2A] = useState(false);
  const [openST, setOpenST] = useState(false);

  const handleOpenAddthis = () => {
    setOpen(true);
    addthis.update("share", "url", "http://www.example.com");
  };

  const handleCloseAddthis = () => {
    setCustomAddThisUrl("");
    setOpen(false);
  };

  const handleOpenA2A = () => {
    setCustomA2A("new A2A URL");
  };

  const handleCloseA2A = () => {
    setCustomA2A("");
    setOpenA2A(false);
  };

  return (
    <div>
      <ShareComponent
        customAddThisUrl={customAddThisUrl}
        customA2A={customA2A}
        open={open}
        openA2A={openA2A}
        setOpenA2A={setOpenA2A}
        openST={openST}
        setOpenST={setOpenST}
        handleCloseAddthis={handleCloseAddthis}
        handleOpenAddthis={handleOpenAddthis}
        handleOpenA2A={handleOpenA2A}
        handleCloseA2A={handleCloseA2A}
      />
    </div>
  );
};

export default MainComponent;
