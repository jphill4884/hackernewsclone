import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="mainContainer">
     <div className="containerFooter">
      <div className="footer">
        <span class="yclinks">
          <a href="newsguidelines.html">Guidelines</a>
          <a href="newsfaq.html">FAQ</a>
          <a href="lists">Lists</a>
          <a href="https://github.com/HackerNews/API">API</a>
          <a href="security.html">Security</a>
          <a href="http://www.ycombinator.com/legal/">Legal</a>
          <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
          <a id="last" href="mailto:hn@ycombinator.com"> Contact </a>
        </span>
      </div>
      </div>
    </div>
  );
}
