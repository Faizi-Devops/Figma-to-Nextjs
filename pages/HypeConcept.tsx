import styles from '../styles/HypeConcept.module.css'
import Image from 'next/image'
const HypeConcept = () => {
    return (
        <div>
            <div className={styles.firstdiv}>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 col-md-6'>

                            <p className={`${styles.firstpara}`}>Why HypeIndustry and what is it exactly?</p>
                            <p className={styles.firstparag}>Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/ <br /> Wholesale goods from Stores, Boutiques, Wholesalers & Resellers for the <br /> Footwear, Apparel & Accessory industry! Basically a new marketplace <br /> that allows you to buy in bulk (only) footwear, apparel etc... Buy cheaper <br /> because of the bulk volume discount and resell worldwide to make a <br /> small margin and keep the volume and recurrence active! The key to <br /> make your money fast. <br /></p>


                        </div>





                        <div className='col-lg-6 col-sm-12 col-md-6 text-center'>
                            <Image className={`${styles.image}`}

                                src="/7.jpg"
                                alt="Picture of the author"
                                width={200}
                                height={200}
                            />
                            <br />


                        </div>

                    </div>

                </div>

            </div>
            <div className='container'>
                <div className={styles.secondiv}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm12'>
                            <Image className={styles.images}

                                src="/8.jpg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                            />


                        </div>
                        <div className='col-lg-6 col-md-6 col-sm12'>
                        <p className={`${styles.secondpara}`}>20 years of relationships + experience</p>
                        <p className={styles.secondparag}>The idea of building a B2B marketplace, came to us a few years ago. <br /> Experiencing the process of buying and selling in bulk: footwear, apparel <br /> etc... since early 2002 we’ve encountered issues and restrictions , we <br /> also faced lots of question from sellers and buyers, shipping issues etc... <br /> But at the end of this journey, we are now providing answers  and <br /> solutions that will help our network and partners!</p>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default HypeConcept;