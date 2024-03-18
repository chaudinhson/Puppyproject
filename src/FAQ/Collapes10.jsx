import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse10 = () => {
  const [open10, setOpen10] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen10(!open10)}
          aria-controls="example-collapse-text"
          aria-expanded={open10}
          className="faq-button1"
        >
          Does My Puppy Have Worms & How Do I Treat Them?
        </Button>
      </div>

      <Collapse in={open10}>
        <div id="example-collapse-text">
          A huge percentage of puppies have worms and if you're a new puppy
          parent, it's something you may well have to deal with.Some worms can
          be seen in your dog's feces, and in severe cases of roundworm
          infestation your pup may even have worms in his vomit. Other symptoms
          of worm infestation include a round, distended belly, a dull, rough
          coat or a cough.Although very common, worms can make your puppy quite
          sick...at the very least he'll feel and look 'out of sorts'.You will
          need your veterinarian to diagnose and confirm the infestation, and
          the type of worm involved. They will then prescribe, or administer,
          the appropriate de-wormer. Do not use over-the-counter medications as
          they can be ineffective at best, and harmful at worst.Heartworms are a
          different story, but you are unlikely to find these in a young
          puppy.You can learn more about worms, causes, symptoms and treatments
          on my Puppy Worms page
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse10;
