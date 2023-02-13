import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Services.module.css';
const Services=({services})=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>What We Can Do?</h1>
            <h1 className={styles.subtitle}>Services We Can help you with</h1>
            <div className={styles.services}>

                {services.map(service=>(
                    <Link passHref key={service.id} href={`/products/${service.name}`}>
                        <div className={styles.service}>
                            <div className={styles.desc}>{service.desc}</div>
                            <span className={styles.cat}>{service.title}</span>
                            <div className={styles.media}>
                                {service.video ? (
                                    <video src={`/img/${service.video}`} autoPlay muted loop className={styles.video}/>
                                ) : (
                                    <Image src={process.env.NEXT_PUBLIC_URL+`/img/${service.photo}`} alt="image1"  className={styles.myImg} layout='fill' width='500' height='500' objectFit='cover'/>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Services;