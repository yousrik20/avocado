import Image from 'next/image';
import styles from '../styles/Intro.module.css';
import Circle from './Circle';
import { motion } from 'framer-motion';
const Intro=()=>{
    return(
        <div div className={styles.container}>
            <Circle  backgroundColor='#b0ff49' top='-50vh' left='-50vh' />
            <Circle  backgroundColor='#01c686' right='-40vh' />
            <div className={styles.card}>
                <h1 className={styles.title}><span className={styles.brand}>AVOCAD0</span> DIGITAL PRODUCT AGENCY</h1>
                <p className={styles.description}>Create live segments and target the right people for messages based on
                    their behaviors.</p>
                <button className={styles.button}>DISCOVER</button>
            </div>
            <motion.div animate={{x:0}} initial={{x:-2000}} transition={{type:'spring',stiffness:60,duration:2}} className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/img/Avocado.png"} fill objectFit='cover'
                 alt="Avocado"/>    
            </motion.div> 
        </div>
    )
}

export default Intro;