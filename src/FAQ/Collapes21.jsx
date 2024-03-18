import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse21 = () => {
  const [open21, setOpen21] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen21(!open21)}
          aria-controls="example-collapse-text"
          aria-expanded={open21}
          className="faq-button1"
        >
          How do I teach my pup not to jump on people?
        </Button>
      </div>

      <Collapse in={open21}>
        <div id="example-collapse-text">
          Hold a treat in front of your dog's nose, and then raise it over his
          head. As his nose comes up, his head should come down. Say "Sit!"
          Reward him when his hindquarters touch the ground. Repeat the drill
          and gradually remove the food used during the lesson. (But always give
          him a treat afterward if he's followed your rules.) After he learns
          the command, tell him to "Sit!" each time he greets someone.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse21;
