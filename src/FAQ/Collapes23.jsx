import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse23 = () => {
  const [open23, setOpen23] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen23(!open23)}
          aria-controls="example-collapse-text"
          aria-expanded={open23}
          className="faq-button1"
        >
          How soon does my new puppy need to see a vet?
        </Button>
      </div>

      <Collapse in={open23}>
        <div id="example-collapse-text">
          As soon as possible. Many breeders and adoption agencies will have
          something like a 48-hour guarantee, so you want to get it done in that
          time. But even without that, you still should get the puppy in within
          a day or two. That way, if there’s something wrong, we can catch it
          early and get it before it becomes a big problem.It also gives us a
          chance to talk with owners about what it takes to raise a puppy. We
          need to talk about worms, feeding, vaccinations, the financial aspect
          of owning a pet, and everything else they can expect over the life of
          their dog.The owners should bring in their list of questions, too. You
          need to ask your vet every question that comes to mind. You can’t ask
          too many questions. Your veterinarian should be willing to block out
          time for that.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse23;
