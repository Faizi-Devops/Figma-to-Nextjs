import styles from '.././styles/ShippingBuyer.module.css'
import Image from 'next/image'
const ShippingBuyer = () => {
    return (
        <>
            <div className='container'>
                <div className={`${styles.main}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p className={`${styles.heading} pt-3`}>Shipping for buyers</p>
                            <p className={`${styles.paragraph}`}>All of our items are being shipped from several warehouses/stores in the <br /> USA and worldwide, and usually ships within 24h to 5 business days <br /> depending on the seller’s shipping time.</p>
                            <p className={`${styles.bold}`}>We take care of all customs paperwork for you , so you can sleep well at <br /> night!</p>
                            <ol >
                                <li className={`${styles.paragraph}`}><span className={`${styles.bold}`}> Seller: </span>Just pack the shoes, tape the box(es)properly with lots of <br /> tape, request your labels via email, and relax! The rest will be taken <br /> care of ☺</li>
                            </ol>
                            <ol >
                                <li className={`${styles.paragraph}`}><span className={`${styles.bold}`}> Buyer: </span>Don’t worry, we will make sure: a proper value, tariff code and <br /> description are entered and that no problems occur from the time <br /> packages leave the country and arrive in your country to clear <br /> customs!</li>
                            </ol>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 text-center responsive'>

                            <Image className={`${styles.image}`}

                                src="/3.jpg"
                                alt="Picture of the author"
                                width={300}
                                height={370}
                            />

                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 col-md-6'>
                            <Image className={`${styles.image}`}

                                src="/4.jpg"
                                alt="Picture of the author"
                                width={300}
                                height={200}
                            />
                        </div>
                        <div className={`col-lg-6 col-sm-12 col-md-6 ${styles.padding_left} `}>
                            <p className={`${styles.heading} pt-2`}>How much does shipping COST</p>
                            <p className={`${styles.paragraph}`}>The default shipping cost for sellers & buyers on the platform is $2.50/ <br /> pair for domestic shipments within the USA, and $10-$12.50/pair for <br /> international express shipments. That will vary based on the seller & <br /> buyer location. Of course, shipping cost are pretty low, as we are dealing <br /> with bulk purchases, resulting in cost-effective shipping.</p>
                        </div>

                    </div>


                </div>

            </div>
            <div className={`${styles.secondiv}`}>
                <div className={`${styles.center}`}>
                    <p className={`${styles.seconhead} pt-5`}>Can I change my shipping address once my order has been placed? &nbsp;<Image

                        src="/5.jpg"
                        alt="Picture of the author"
                        width={15}
                        height={10}
                    /></p>
                    <p className={`${styles.seconpara}`}>Hypeindustry is unable to change a shipping address once the order has been placed. So please make sure all personal and corporate information are correct on your user profile.Also the shipping address on file has to match your billing address!</p>
                    <p className={`${styles.seconheadin} `}>Why does my billing and shipping address have to MATCH? &nbsp;<Image

                        src="/6.jpg"
                        alt="Picture of the author"
                        width={15}
                        height={10}
                    /></p>
                    <p className={`${styles.seconheadin} `}>Why does my billing and shipping address have to MATCH? &nbsp;<Image

                        src="/6.jpg"
                        alt="Picture of the author"
                        width={15}
                        height={10}
                    /></p>
                    <p className={`${styles.seconheadin} `}>Can I edit my order once I placed It? &nbsp;<Image

                        src="/6.jpg"
                        alt="Picture of the author"
                        width={15}
                        height={10}
                    /></p>
                    <p className={`${styles.seconheadin} `}>How long does it take to ship? &nbsp;<Image

                        src="/6.jpg"
                        alt="Picture of the author"
                        width={15}
                        height={10}
                    /></p>
                    <br /><br /><br />
                </div>

            </div>
        </>

    )
}
export default ShippingBuyer;