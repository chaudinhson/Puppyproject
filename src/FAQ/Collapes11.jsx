import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse11 = () => {
  const [open11, setOpen11] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen11(!open11)}
          aria-controls="example-collapse-text"
          aria-expanded={open11}
          className="faq-button1"
        >
          HELP! MY PUPPY HAS DIARRHEAL ?
        </Button>
      </div>

      <Collapse in={open11}>
        <div id="example-collapse-text">
          This is one of those questions where it's not necessarily easy to
          figure out the answer without veterinary help.Diarrhea in puppies is
          very common and can be a sign of a simple tummy upset due to a change
          in diet for example - or a deadly serious illness such as Parvo.If
          your puppy has diarrhea that looks has the consistency of chocolate
          pudding, but otherwise seems okay, chances are he's eaten something he
          shouldn't.If he's not vomiting, is alert, playful and bright-eyed you
          can probably afford to wait and see for a while. BUT if he's not
          feeling better within 24 hours, or seems to be getting worse, call
          your veterinarian right away.If your puppy's diarrhea is severe and
          watery, he's vomiting and/or seems lethargic, has dull eyes and looks
          like he feel unwell you need to get in touch with your veterinarian
          right away.If it's after hours you should contact your nearest 24 hour
          emergency pet clinic. This could be a life-or-death situation.For more
          detailed information on this common puppy complaint, check out my
          Puppy Diarrhea page.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse11;
