import React from 'react'
import styles from './Header.module.scss'
import useDeviceType from '../../Hooks/useDeviceType/useDeviceType'
import MobileNavContent from './SubComponents/MobileNavContent/MobileNavContent';
import DesktopNavContent from './SubComponents/DesktopNavContent/DesktopNavContent';

function Header() {

    const isMobile = useDeviceType();

    return (
        <nav className={styles.headerWrapper}>
            {isMobile ? <MobileNavContent /> : <DesktopNavContent />}
        </nav>
    )
}

export default Header