import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import './FooterComponent.css'
const FooterComponent = ()=>{
    return(
        <div className="footer-container">
            <div className="footer-head">
                <h1>KoinX</h1>
                <div className="links">
                    <FaLinkedin/>
                    <FaGithubSquare/>
                    <FaTwitter/>
                </div>

            </div>
                <hr />
            <div className="foot-body">
                <ol className="footer-order">
                    <h3>Crypto Taxes for</h3>
                    <li>individuals and inverstors</li>
                    <li>Tax Professionals and Accountant</li>
                    <li>Exchnage and Web3 projects</li>
                </ol>
                <ol className="footer-order">
                    <h3>Fress Tools</h3>
                    <li>cryto Prize Live</li>
                    <li>crypto tax calculator</li>
                    <li>crypto tac saving speculator</li>
                    <li>crypto profit calculator</li>
                    <li>crypto converter</li>
                    <li>crypto Staking ROI Calculator</li>
                </ol>
                <ol className="footer-order">
                    <h3>Resource Center</h3>
                    <li>Crypto Tax Guides</li>
                    <li>dumb ways to los money</li>
                    <li>crypto tac saving guide</li>
                    <li>Blogs</li>
                    <li>crypto Buying Guides</li>
                    <li>crypto staking guides</li>
                    <li>crypto minning guides</li>
                    <li>crypto price guides</li>
                </ol>
                <ol className="footer-order">
                    <h3>Help and support</h3>
                    <li>Products guides</li>
                    <li>How to  guides</li>
                    <li>Templates</li>
                    <li>contact us</li>
                </ol>
                <ol className="footer-order">
                    <h3>Company</h3>
                    <li>About us</li>
                    <li>Backd by</li>
                    <li>Media and press</li>
                    <li>carrers</li>
                    <li>security</li>
                    <li>refund policy</li>
                    <li>brand assets</li>
                    <li>terms of use</li>
                    <li>private policy</li>
                </ol>
            </div>
                <hr />
            <p className="license">
            © All rights reserved by Simplify Infotech Pvt. Ltd.
            </p>
        </div>
    )
}
export default FooterComponent;