import React from 'react';




// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage, handlePageChange }) {
  return (

<footer className="footer">
    {/* <p>INSERT ICON LINKS HERE</p> */}
    <a href="https://github.com/avalynnw" target="blank"><i class="fa-brands fa-3x fa fa-github"></i></a>
    <a href="https://www.linkedin.com/in/avalynn-helgrave-68b723223/" target="blank"><i class="fa-solid fa fa-linkedin-square fa-3x"></i></a>
    <a href="https://stackoverflow.com/users/17153184/avalynnw" target="blank"><i class="fa-brands fa-3x fa-stack-overflow"></i></a>
</footer>

);
}

export default Footer;
