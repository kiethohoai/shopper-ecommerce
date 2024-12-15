import "./NewLetters.css";

const NewLetters = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offters On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewLetters;
