import React from 'react';
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h3 className="footer-header">The Financial Tracker <span>&reg;</span></h3>
                <p className="footer-disclaimer">The information and tools contained are solely for surveil and not intended to be a substitute for financial advice 
                that can be provided by your own accountant, and/or financial advisor. We cannot be held responsible for any errors or omissions and accept no liability 
                whatsoever for any loss or damage howsoever arising.</p>
            </div>
            <div className="footer-bottom">
                <p className="footer-copyright">Copyright &copy;2022 - Designed and Built By <span><a target="_blank" href="https://github.com/davidmvenegas" rel="noreferrer">David Venegas</a></span> & <span><a target="_blank" href="https://github.com/Smith-Reesie" rel="noreferrer">Reese Smith</a></span></p>
            </div>
        </footer>
    )
}

export default Footer;