import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse2 = () => {
  const [open2, setOpen2] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen2(!open2)}
          aria-controls="example-collapse-text"
          aria-expanded={open2}
          className="faq-button1"
        >
          WHAT ARE THE VACCINES AND HOW DO THEY WORK?
        </Button>
      </div>

      <Collapse in={open2}>
        <div id="example-collapse-text">
          Dog and puppy vaccinations are basically a training camp for your
          dog’s immune system. The white blood cells in his body will produce
          proteins (so called antibodies) that will, together with other white
          blood cells, fight the infectious agent (called antigens). It is
          recommended to top up your dog’s vaccinations frequently to make sure
          his body still has enough of the trained antibodies to be able to
          fight the infectious germs when needed.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse2;
