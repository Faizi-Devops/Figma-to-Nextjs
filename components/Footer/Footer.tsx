import styles from '../.././styles/Footer.module.css'
const Footer = () =>{
    return(
        <div className={`${styles.background} pb-3`}>
            <div className={`container pt-5 `}>
                <div className='row'>
                    <div className="col-lg-3 col-sm-12 col-md-6">
                        <h4 className={`${styles.text_color}`}>HYPEINDUSTRY</h4>
                        <p className={`${styles.text_color} pt-3`}>HypeIndutry Concept</p>
                        <p className={`${styles.text_color}`}>Buying Guide</p>
                        <p className={`${styles.text_color}`}>Selling Guide</p>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6">
                    <h4 className={`${styles.text_color}`}>HYPE OFFERS</h4>
                        <p className={`${styles.text_color} pt-3`}>Footwear</p>
                        <p className={`${styles.text_color}`}>Apparel</p>
                        <p className={`${styles.text_color}`}>Accessories</p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6">
                    <h4 className={`${styles.text_color}`}>CONTACT US </h4>
                        <p className={`${styles.text_color} pt-3`}>Shipping For Buyers</p>
                        <p className={`${styles.text_color}`}>Shipping For Sellers</p>
                        
                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-6">
                    <h4 className={`${styles.text_color}`}>HYPEINDUSTRY</h4>
                        <p className={`${styles.email_color} pt-3`}>shipping@hypeindustry.com</p>
                        
                        <p className={`${styles.email_color}`}>sales@hypindustry.com</p>
                    </div>
                  

                </div>
                <br /><br />
                
                
                

            </div>
            <hr style={{color:"white"}}/>
            <p className={`text-center ${styles.text_color} pt-3`}>@ 2022 Faizi-Dev</p>
            
            
            



        </div>
    )
}
export default Footer;