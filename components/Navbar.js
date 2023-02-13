import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
const Navbar=()=>{
    const [open,setOpen]=useState(false);
    return(
        <div className={styles.container}>
            <Link href='/'>AVOCADO</Link>    
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href='/products/design'>DESIGN</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/products/development'>DEVELOPMENT</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/products/production'>PORDUCTION</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/products/photography'>PHOTOGRAPHY</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/contact'>CONTACT</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul onClick={()=>setOpen(false)} className={styles.menu} style={{right:open?"0px":"-50vw"}}>
                <li className={styles.menuItem}>
                    <Link href='/products/design'>DESIGN</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/products/development'>DEVELOPMENT</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/products/production'>PORDUCTION</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/products/photography'>PHOTOGRAPHY</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/contact'>CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;