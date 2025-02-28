import { useState } from 'react';
import './HomeComponent.css'
import { useRef } from 'react';
import { useEffect } from 'react';
const HomeComponent = ()=>{

    const [tax,setTax] = useState(0)
    const [capital , setCapital] = useState(0);
    const [discount,setDiscount] = useState(0);
    const [newCapital,setNewCapital] = useState(0)
    const [taxToPay , setTaxToPay] = useState(0)
    const [flag,setFlag] = useState(true)

    const purchaseRef = useRef()
    const expenceRef = useRef()
    const annualRef = useRef()
    const priceRef = useRef()
    const typeRef = useRef()
    
    
    const calculateFn = ()=>{
        let taxVal = annualRef.current.value
        let val = Number(priceRef.current.value) - Number(purchaseRef.current.value) - Number(expenceRef.current.value)
        let dis =val * (50 / 100);
        setCapital(pre => val)
        setDiscount(pre => dis)
        setNewCapital(flag ? val - dis : val)
        let newdis = flag ? val - dis : val;
        let taxToPay;
        if(taxVal === '1'){
            taxToPay = 0
        }
        else if(taxVal === '18'){
            taxToPay = 19/100 * (newdis)
        }
        else if(taxVal === '45'){
            taxToPay = 32/100 * (newdis)
        }
        else if(taxVal === '120'){
            taxToPay = 37/100 * (newdis)
        }
        else{
            if(taxVal === undefined){
                taxToPay = 0;
                return;
            }
            taxToPay = 45/100 * (newdis)
        }
        console.log(taxVal);
        
        setTaxToPay(taxToPay)
    }
    useEffect(()=> calculateFn(),[flag])
    return(
        <div className='container'>
            <nav>
                <p className='logo'>KoinX</p>
                <ol className='nav-order'>
                    <li className='list'>Home</li>
                    <li className='list'>About</li>
                    <li className='login list'>Login</li>
                </ol>
            </nav>

            <div className='coinX'>
                <div className='tax-container'>
                    <div className='tax'>
                        <h3>Free Crypto Tax Calculator Australia</h3>
                        <div className='fin-country'>
                            <div className='fin'>
                                <label htmlFor="">Financial Year</label>
                                <select name="" id="">
                                    <option value="FY 2023-24">FY 2023-24</option>
                                </select>
                            </div>
                            <div className='country'>
                                <label htmlFor="">Country</label>
                                <select name="" id="">
                                    <option value="Australia">Australia</option>
                                    {/* <option value="India">India</option> */}
                                </select>
                            </div>
                        </div>
                        <hr />
                
                        <div className='purchase-sale'>
                            <div className='purchase'>
                                <label htmlFor="">Enter purchase price of Crypto</label>
                               <div> 
                                <span>$</span>
                               <input defaultValue={30000} onChange={calculateFn} ref={purchaseRef} type="number" />
                               </div>
                            </div>
                            <div className='sale'>
                                <label htmlFor="">Enter sale price of Crypto</label>
                                <div> 
                                <span>$</span>
                               <input defaultValue={20000} onChange={calculateFn} ref={priceRef} type="number" />
                               </div>
                            </div>
                        </div>

                        <div className='exp-type'>
                            <div className='exp'>
                                <label htmlFor="">Enter your Expenses</label>
                                <div> 
                                <span>$</span>
                               <input ref={expenceRef} onChange={calculateFn} defaultValue={5000} type="number" />
                               </div>
                            </div>
                            <div className='type'>
                                <label htmlFor="">Investment Type</label>
                                <div className='buttons'>
                                    <div className='one' onClick={()=> setFlag(false)} style={{border:!flag ?"2px solid blue" :""}}>
                                        <button>Short Term</button>
                                        <h5> {'< 12 months'}</h5>
                                    </div>
                                    <div className='two' onClick={()=> setFlag(true)} style={{border:flag ?"2px solid blue" :""}}>
                                        <button>Long Term</button>
                                        <h5>{'12 months > '}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='anual-tax-rate'>
                            <div className='anual'>
                                <label htmlFor="">Select Your Annual Income</label>
                                <select name="" id="" defaultValue={'1'} onChange={(e)=> calculateFn(e.target.value)} ref={annualRef}>
                                    <option value="1">$0 - $18,200</option>
                                    <option value="18">$18,201 - $45,000</option>
                                    <option value="45">$45,001 - $120,000</option>
                                    <option value="120">$120,001 - $180,000</option>
                                    <option value="180">$180,001+</option>
                                </select>
                            </div>
                            <div className='tax-rate'>
                                <p>Tax Rate</p>
                                <p>$ 5,902 + 32% of excess over $45,001</p>
                            </div>
                        </div>

                        { flag  && <div className='capital-discount'>
                            <div className='capital'>
                                <label htmlFor="">Capital gains amount</label>
                                <input type="text" disabled value={`$ ${capital}`}/>
                            </div>
                            <div className="discount">
                                <label htmlFor="">Discount for long term gains</label>
                                <input type="text" disabled value={`$ ${discount}`}/>
                            </div>
                        </div>}

                        <div className='tax-pay-container'>
                            <div className='capital-gain'>
                                <p>Net Capital gains tax amount</p>
                                <p>${newCapital}</p>
                            </div>
                            <div className='tax-pay'>
                                <p>The tax you need to pay*</p>
                                <p>${taxToPay}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sponser'>
                    <div className="content">
                    <h2>Get Started with KoinX for FREE</h2>
                    <p className="data">
                    With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
                    </p>
                    <img src="https://koinx-khaki.vercel.app/assets/promot-DzMtMe9a.png" alt="" />
                    <button className='sponser-button'>Get Started For Free ➡️</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeComponent;