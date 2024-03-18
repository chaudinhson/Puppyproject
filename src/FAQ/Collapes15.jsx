import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse15 = () => {
  const [open15, setOpen15] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen15(!open15)}
          aria-controls="example-collapse-text"
          aria-expanded={open15}
          className="faq-button1"
        >
          How Can I Help My Constipated Puppy?
        </Button>
      </div>

      <Collapse in={open15}>
        <div id="example-collapse-text">
          Puppies can get constipated from time to time, and often it's the
          small/tiny breeds that have trouble.There are many reasons why a puppy
          can get constipated, and these from medical conditions to hairballs
          (and everything in between!).There are a few simple things you can do
          to treat the problem, and to prevent it happening again. A correct
          diet, plenty of fluids and a good amount of exercise are all vital to
          a healthy digestive system.Find out more about preventing and treating
          puppy constipation on my A Constipated Puppy page.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse15;
