import React from "react";

// css
import "../styles/footer.css";

function Footer({ listCount }) {
  return (
    <footer>
      {listCount > 0 ? (
        <p>
          {listCount} {listCount > 1 ? "items" : "item"}
        </p>
      ) : (
        <p>&copy;copyright 2025. All rights reserved</p>
      )}
    </footer>
  );
}

export default Footer;
