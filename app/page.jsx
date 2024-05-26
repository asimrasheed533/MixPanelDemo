"use client";

import mixpanel from "../lib/mixpanel";

export default function Page() {
  const handleButtonClick = () => {
    mixpanel.identify("123");
    mixpanel.people.set({
      $name: "John Doe",
      $email: "mehfoozijaz786@gmail.com",
    });
    mixpanel.track("Sign Up");
  };

  return (
    <>
      <div className="banner">
        <div className="container">
          <h1>Create Next App</h1>
          <p>Generated by create next app</p>
        </div>
      </div>
      <div className="container">
        <h2>Getting Started</h2>
        <p>
          Edit <code>pages/index.js</code> and save to reload.
        </p>
        <p>
          <a href="#">
            <button onClick={handleButtonClick} className="button__more">
              Learn More
            </button>
          </a>
        </p>
      </div>
      <div className="footer">
        <div className="container">
          <p>
            <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              Powered by Vercel
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
