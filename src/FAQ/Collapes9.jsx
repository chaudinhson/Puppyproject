import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse9 = () => {
  const [open9, setOpen9] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen9(!open9)}
          aria-controls="example-collapse-text"
          aria-expanded={open9}
          className="faq-button1"
        >
          HOW CAN I GET RID OF DOG URINE STAINS & ODOR?
        </Button>
      </div>

      <Collapse in={open9}>
        <div id="example-collapse-text">
          Even when potty training is going smoothly, there will be times when
          your puppy has an 'accident'. It's one of those 'puppy FAQs of
          life'.To avoid having your carpets ruined you need to act quickly, and
          tackle those puddles in the right way.To be effective, you need to
          blot up any liquid that is in your carpet. Then you need to rinse the
          area well with clean, cool water and blot that up too.Follow this with
          an application of an enzymatic-based cleaner/odor remover. Allow this
          to soak into the carpet for at least 10 minutes and then blot up the
          excess. Allow area to dry thoroughly.You may need to repeat this
          process more than once.For more information on how to keep your
          carpets stain and odor free, and find out which product REALLY works,
          see my Dog Urine Cleaning and Best Dog Urine Cleaning Products pages.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse9;
