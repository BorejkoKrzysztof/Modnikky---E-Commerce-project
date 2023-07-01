import React, { useEffect, useState } from 'react'
import styles from './MobileNavContent.module.scss'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa'
import { PiHandbagSimpleBold } from 'react-icons/pi'
import { MdOutlineAccountCircle } from 'react-icons/md'

function MobileNavContent() {

    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    useEffect(() => {
        console.log(isMobileMenuActive)
    }, [isMobileMenuActive])

    return (
        <section className={styles.mobileNavWrapper}>
            <div className={styles.menuIconWrapper}>
                <div className={styles.menuIconArea} onClick={() => setIsMobileMenuActive(prev => !prev)}>
                    <HiOutlineMenuAlt2 />
                </div>
            </div>
            <div className={styles.brandWrapper}>
                <span style={{ fontFamily: '"LexendPeta"' }} className={styles.brandText}>
                    Modnikky
                </span>
            </div>
            <div className={styles.iconsWrapper}>
                <div className={styles.searchIcon}>
                    <FaSearch />
                </div>
                <div className={styles.bagIcon}>
                    <PiHandbagSimpleBold />
                </div>
                <div className={styles.accountIcon}>
                    <MdOutlineAccountCircle />
                </div>
            </div>
        </section>
    )
}

export default MobileNavContent