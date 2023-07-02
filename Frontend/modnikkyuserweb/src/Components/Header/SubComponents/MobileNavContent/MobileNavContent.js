import React, { useEffect, useState } from 'react'
import styles from './MobileNavContent.module.scss'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa'
import { PiHandbagSimpleBold } from 'react-icons/pi'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { MobileNavigationItems } from '../../../../Models/MobileNavigationItems/MobileNavigationItems'
import NavLinkItem from './subComponents/NavLinkItem/NavLinkItem'

function MobileNavContent() {

    const [isMobileMenuActive, setIsMobileMenuActive] = useState(true)

    useEffect(() => {
        // TODO: zrobić blokowanie scrolla
        console.log(isMobileMenuActive)
    }, [isMobileMenuActive])

    return (
        <>
            <section className={styles.mobileNavbarWrapper}>
                <div className={styles.menuIconWrapper}>
                    <div className={styles.menuIconArea} onClick={() => setIsMobileMenuActive(prev => !prev)}>
                        <HiOutlineMenuAlt2 />
                    </div>
                </div>
                <div className={styles.brandWrapper}>
                    {/* TODO: Czcionka nie ładuje sie */}
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
            <section className={isMobileMenuActive ? `${styles.mobileHiddenMenu} ${styles.mobileHiddenMenuActive}` : `${styles.mobileHiddenMenu}`}>
                <div className={styles.hiddenMenuContentWrapper}>
                    <div className={styles.hiddenMenuContent}>
                        <NavLinkItem itemsCollection={MobileNavigationItems} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MobileNavContent