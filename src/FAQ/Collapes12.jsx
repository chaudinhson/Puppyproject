import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse12 = () => {
  const [open12, setOpen12] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen12(!open12)}
          aria-controls="example-collapse-text"
          aria-expanded={open12}
          className="faq-button1"
        >
          HOW CAN I TRAIN MY PUPPY PROPERLY?
        </Button>
      </div>

      <Collapse in={open12}>
        <div id="example-collapse-text">
          If you want your precious little puppy to grow up to be a well-behaved
          companion, you need to teach him or her some manners, and some basic
          obedience commands.A fair number of puppy FAQs center around puppy
          behavior, and learning what behavior is acceptable and what isn't
          should be some of his earliest lessons!If you want your pup to
          understand what you expect of him, there are three simple steps that
          you MUST follow : tell your puppy what you want him to dohelp him to
          perform that behaviorreward him with treats and/or praise when he is
          successful Several short training sessions per day are much better
          than one longer one because you want him to enjoy his trainings
          sessions and think they're a fun part of his day.The first thing to
          teach your little one is to recognize his name. After that, the basic
          obedience commands that you want your pup to teach him are "sit",
          "come" and "down". You can read more about this on my Puppy Training
          Page
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse12;
