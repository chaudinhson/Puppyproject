const Scrolltop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      document.querySelector(".scroll-top-btn").style.display = "block";
    } else {
      document.querySelector(".scroll-top-btn").style.display = "none";
    }
  };

  return (
    <>
      <button onClick={scrollTop} class="scroll-top-btn">
        <span class="material-symbols-outlined arrowtop">arrow_upward</span>
      </button>
    </>
  );
};
export default Scrolltop;
