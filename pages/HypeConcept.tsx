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
            <div className={styles.thirdiv}>
                <div className='container'>
                    <div className={`${styles.upper} row`}>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p className={styles.thirdpara}>Always the same issue through the <br /> years </p>
                            <p className={styles.thirdparag}>Many years have past of doing this bulk /wholesale trading business...</p>
                            <p className={styles.thirdparag}>

                                And it is always the same questions that came to us from our suppliers: <br /> “Hey can you move apparel? I have too much of this brand etc...”, or “Can <br /> you buy any accessories?”, “Can you move soccer shoes?”, “I received <br /> another shipment of this model ;can you buy more or help me move more <br /> now?” etc...

                            </p>
                            <p className={styles.thirdparag}>Well the answer was: “We don’t have any clients for those items, or let me ask around”</p>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm12  text-center'>
                            <Image className={`${styles.imagess}`}

                                src="/Group.jpg"
                                alt="Picture of the author"
                                width={200}
                                height={200}
                            />


                        </div>

                    </div>
                    <div className={`row ${styles.fourthdiv}`}>
                        <div className='col-sm-6 col-md-6 col-sm-12'>
                            <Image className={styles.img}
                                
                                src="/Frame.jpg"
                                alt="Picture of the author"
                                width={500}
                                height={300}
                            />

                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-12'>
                            <p className={styles.fifthpara}>Utopia</p>
                            <p className={styles.thirdparag}>In a utopian marketplace, the best option would be to move a bunch of footwear/apparel or else, in bulk (one shot), to: another reseller, store or wholesaler somewhere on planet earth</p>
                            <p className={styles.thirdparag}>
 
 Well, there are no B2B marketplaces anywhere that deal with: limited/ hyped goods, or a marketplace where stores (with no brand account) & reseller could buy from (in bulk prices footwear, apparel, accessories) without any boundaries or questions! So let's try and create that platform: so other store owners & resellers/wholesalers worldwide could profit from!</p>

                        
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default HypeConcept;