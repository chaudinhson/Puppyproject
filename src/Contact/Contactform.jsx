const Contactform = () => {
  return (
    <div className="Formbox">
      <form action="">
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">EMAIL</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="message">Share your story</label>
        <textarea id="message" name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
export default Contactform;
