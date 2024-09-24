import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ali Nemati</h2>
        <p>
          <a href="nematiali1377@gmail.com">NematiAli1377@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <div>
        I am dedicated and creative programmer with a bachelor degree in
        Software Engineering. From starting with Python to specializing in
        mobile development with Flutter and web development with React
        and Next.js, my learning journey has always been aimed at enhancing and
        expanding my skills in various programming and web technologies{" "}
      </div>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Ali&apos;Nemati <Link to="/">Alinemati.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
