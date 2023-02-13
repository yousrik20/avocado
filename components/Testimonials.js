import styles from '../styles/Testimonials.module.css';
import Circle from './Circle';
import { users } from '../data';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Testimonials=()=>{
    return(
        <div className={styles.container}>
            <Circle backgroundColor="darkblue" top='-70vh' left='0' right='0'/>
            <h1 className={styles.title}>Testimonials</h1>
            <div className={styles.wrapper}>
                {users.map(user=>(
                    <motion.div  initial={{ opacity: 0, }}
                                 whileInView={{ opacity: 1 }}
                                 transition={{ type: "tween",duration:2 }} key={user.id} className={styles.card}>
                        <img src={`/img/${user.logo}`} width='30' height='30' alt=''/>
                        <p className={styles.comment}>{user.comment}</p>
                        <div className={styles.person}>
                            <img src={`/img/${user.avatar}`} className={styles.avatar} objectFit='cover' width='45' height='45' alt/>
                            <div className={styles.info}>
                                <span className={styles.username}>{user.name}</span>
                                <span className={styles.jobTitle}>{user.title}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;