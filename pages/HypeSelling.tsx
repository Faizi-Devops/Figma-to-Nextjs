import styles from '.././styles/HypeSelling.module.css'
import Image from 'next/image'
const HypeSelling = () =>{
    return(
        <div className={`container-fluid ${styles.background}`}>
            <p className={` ${styles.heading}`}>Selling on HypeIndustry</p>
            <div className='text-center'>
            <div className="btn-group pt-3" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-success">BECOME A SELLER</button>
  <button type="button" className="btn btn-primary">CREATE A LISTING</button>
  <button type="button" className="btn btn-danger">SELLER FEES</button>
  <button type="button" className="btn btn-warning">CONDITION OF ITEMS</button>
</div>

            </div>
            <div className={`${styles.secondiv}`}>
                <p className={`pt-5 ${styles.hyehead}`}>How do I sell on HypeIndustry? &nbsp;<Image
      
      src="/5.jpg"
      alt="Picture of the author"
      width={17}
      height={10}
    /></p>
      <p className={`${styles.hyepara}`}>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all the required information. We’ll notify you as soon as your request has been approved.</p>
      <p className={` ${styles.hyehead}`}>I requested to become a SELLER, how long will it take to get approved? &nbsp;<Image
      
      src="/5.jpg"
      alt="Picture of the author"
      width={17}
      height={10}
    /></p>
     <p className={` ${styles.hyehead}`}>How do I delete my Account? &nbsp;<Image
      
      src="/5.jpg"
      alt="Picture of the author"
      width={17}
      height={10}
    /></p>
     <p className={` ${styles.hyehead}`}>Can I share my seller privileges with others? &nbsp;<Image
      
      src="/5.jpg"
      alt="Picture of the author"
      width={17}
      height={10}
    /></p>
     <p className={` ${styles.hyehead}`}>Can I create several Seller Accounts? &nbsp;<Image
      
      src="/5.jpg"
      alt="Picture of the author"
      width={17}
      height={10}
    /></p>
     <p className={` ${styles.hyehead}`}>How do I become a seller if I have a store outside the USA? &nbsp;<Image
      
      src="/5.jpg"
      alt="Picture of the author"
      width={17}
      height={10}
    /></p>
    <br /><br /><br />
            </div>
          


        </div>
    )
}
export default HypeSelling;