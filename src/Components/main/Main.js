import React from "react";
import "./styles.css";
export default function Main() {
  return (
    <div className="container">
      <section className="sec-1">
        <h1>Join Our Community</h1>
        <h2>30 day,Hassle free money back guarantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>

      <section className="sec-2">
        <div className="div-1">
          <h2>Monthly Subscription</h2>
          <h1><span>$29</span> per month</h1>
          <p>Full access for less than $1 a day</p>
          <button id="btn-signup">Sign Up</button>
        </div>
        <div className="div-2">
          <h2>Why Us</h2>
          <p>
            Tutorials by industry experts Peer & expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      </section>
    </div>
  );
}
