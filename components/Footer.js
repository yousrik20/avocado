import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
const Footer=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.carL}>
                <h1 className={styles.title}>AVOCADO CREATIVES</h1>
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" passHref>
                        <>
                            <span className={styles.linkText}>Work With Us</span>
                            <img alt='' width='40' height='40' src='/img/link.png'/>
                        </>
                    </Link>
                    
                </h1>
            </div>
            <div className={styles.carS}>
                <div className={styles.cardItem}>
                    12 ADAM SETREEt NY <br/> USA
                </div>
                <div className={styles.cardItem}>
                    CONTACT@Germanboy.DEV <br/> 221 9293 77368
                </div>
            </div>
            <div className={styles.carS}>
            <div className={styles.cardItem}>
                    FOLLOW US: 
                    <br/> __FB__IN__BE__TW
                </div>
                <div className={styles.cardItem}>
                    &copy; 2023 Germanboy
                    <br/>
                    ALL RIGHT RESERVED 
                </div>
            </div>
        </div>
    )
}

export default Footer;