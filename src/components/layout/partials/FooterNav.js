import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "../../../styles/mine.css";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="#0" id="link-head">
            Products and services
          </Link>
          <li>
            <Link to="#0">Diaper collection for Home</Link>
          </li>
          <li>
            <Link to="#0">Diaper disposal for business</Link>
          </li>
          <li>
            <Link to="#0">Roll-off dumpster for rental</Link>
          </li>
        </li>
        <li className="link-head">
          <Link id="link-head" to="#0">
            Customer Support
          </Link>
          <li>
            <Link to="#0">Pay My Bill</Link>
          </li>
          <li>
            <Link to="#0">Learn More on Diaper Management</Link>
          </li>
          <li>
            <Link to="#0">Customer Support</Link>
          </li>
          <li>
            <Link to="#0">Frequently Asked Questions</Link>
          </li>
        </li>
        <li>
          <Link to="#0" id="link-head">
            About Us
          </Link>
          <li>
            <Link to="#0">Who We Are</Link>
          </li>
          <li>
            <Link to="#0">Why ADM</Link>
          </li>
          <li>
            <Link to="#0">Compliance and Ethics</Link>
          </li>
          <li>
            <Link to="#0">Media Room</Link>
          </li>
        </li>
        <li>
          <Link to="#0" id="link-head">
            Work with Us
          </Link>
          <li>
            <Link to="#0">Careers</Link>
          </li>
          <li>
            <Link to="#0">Investors</Link>
          </li>
          <li>
            <Link to="#0">Recyclers</Link>
          </li>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
