import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/ShippingSeller.module.css'
import Image from 'next/image'
const ShippingSeller = () =>{
    return(
        <div>
            
            <div className={`${styles.background_box} `}>
                <div className={`${styles.mid_div}`}>
                    <p className={`${styles.heading}`}>
                    How do I get my prepaid shipping LABELS?
                    </p>
                    <p className={`${styles.paragraph}`}>Once you have approved the purchase, you can request for your labels by email at <span style={{color:"#67CBAB"}}> shipping@hypeindustry.com </span></p>
                    <p className={`${styles.paragraph}`}><b> We take care of all customs paperwork for you , so you can sleep well at night!</b></p>
                    <p className={`${styles.items}`}>1. &nbsp;&nbsp; Buyer’s details in full, name , full address and invoice number.</p>
                    <p className={`${styles.items}`}>2. &nbsp;&nbsp; Box count and if possible boxes dimension.</p>
                    <p className={`${styles.items}`}>3. &nbsp;&nbsp; Total pairs shipped, no need for weight.</p>
                    <p className={`${styles.items}`}>4. &nbsp;&nbsp; Pick up requested yes or no , and address for pick up if needed</p>
                    <p className={`${styles.another}`}>Labels are then emailed to you within 24h/48h. You can drop the boxes at an authorized shipper or request a pick-up. We can either schedule the pick-up for you, during your opening hours, or,  you can request the pick-up yourself at your own discretion!</p>
                    <p className={`${styles.heading}`}>How do I pack the items I have SOLD?</p>
                    <p className={`${styles.paragraph}`}>This process is very easy! We suggest using standard Nike or Adidas boxes (29x19x16 or 30x20x15 inches), and pack 12 or 13 prs per box. If you unfold boxes properly you may be able to fit an extra pair or two! Check out this video we found (we are not in that video or know anyone in this video) it is a tutorial for sellers who do not know how to flatten shoe boxes. With this method you can pack 14 to 15 pairs versus 12 pairs per box:</p>
                    <div className='text-center pt-4 pb-4'>
                    <Image className={`${styles.image}`}
      
      src="/2.jpg"
      alt="Picture of the author"
      width={400}
      height={300}
    />
                        

                    </div>
                    <p className={`${styles.paragraph}`}>Do not put more than 15 pairs of shoes per box and do not fold/flatten shoe boxes, that are not foldable! For example, certain pair of shoes like Jordan retro boxes do not fold and certain adidas consortium do not fold as well so please be very careful!</p>
                </div>
                

            </div>
            <br /><br /><br />
            

        </div>
        
    )
}
export default  ShippingSeller