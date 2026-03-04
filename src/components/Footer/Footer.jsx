import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-black text-base-content p-10">
  <aside>
<h1 className='text-white font-bold text-2xl'>CS — Ticket System</h1>
    <p className='text-white text-sm font-light'>
Our CS Ticket System is a centralized customer support <br /> platform designed to manage, customer issues efficiently.<br />
It allows customers to submit support requests <br /> while enabling support teams  in a structured workflow. <br />
</p>
  </aside>
  <nav className='text-white'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='text-white'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='text-white'> 
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav className='text-white'> 
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
 
  </nav>
</footer>
        </div>
    );
};

export default Footer;