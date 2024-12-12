import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <Link href="/store" className="footer-link">FIND A STORE</Link>
            <Link href="/member" className="footer-link">BECOME A MEMBER</Link>
            <Link href="/signup" className="footer-link">SIGN UP FOR EMAIL</Link>
            <Link href="/feedback" className="footer-link">SEND US FEEDBACK</Link>
            <Link href="/student" className="footer-link">STUDENT DISCOUNTS</Link>
          </div>

          <div className="footer-column">
            <h3>GET HELP</h3>
            <Link href="/order-status" className="footer-link">Order Status</Link>
            <Link href="/delivery" className="footer-link">Delivery</Link>
            <Link href="/returns" className="footer-link">Returns</Link>
            <Link href="/payment" className="footer-link">Payment Options</Link>
            <Link href="/contact" className="footer-link">Contact Us On TheShoeSpot.com Inquiries</Link>
            <Link href="/contact-other" className="footer-link">Contact Us On All Other Inquiries</Link>
          </div>

          <div className="footer-column">
            <h3>ABOUT SHOE SPOT</h3>
            <Link href="/news" className="footer-link">News</Link>
            <Link href="/careers" className="footer-link">Careers</Link>
            <Link href="/investors" className="footer-link">Investors</Link>
            <Link href="/sustainability" className="footer-link">Sustainability</Link>
          </div>

          <div className="footer-column">
            <div className="social-icons">
              <a href="#" target='blank' className="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" target='blank' className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" target='blank' className="social-icon" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" target='blank' className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span style={{ color: 'white' }}>Pakistan</span>
            <span className='copyright'>© 2023 The Shoe Spot, Pak. All Rights Reserved</span>
          </div>
          <div className="footer-bottom-right">
            <Link href="/guides" className="footer-link copyright">Guides</Link>
            <Link href="/terms" className="footer-link copyright">Terms of Sale</Link>
            <Link href="/terms-of-use" className="footer-link copyright">Terms of Use</Link>
            <Link href="/privacy" className="footer-link copyright">The Shoe Spot Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

