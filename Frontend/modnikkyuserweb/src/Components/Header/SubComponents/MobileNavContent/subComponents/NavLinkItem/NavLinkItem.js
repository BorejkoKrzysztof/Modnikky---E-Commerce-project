import React from 'react'
import styles from './NavLinkItem.module.scss'

function NavLinkItem({ itemsCollection }) {
    return (
        <ul>
            {
                itemsCollection.map((item, index) => {

                    return (
                        item.subCategories.length === 0 ?
                            <React.Fragment key={index}>
                                <li>
                                    <a href={item.link}>
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            </React.Fragment>
                            :
                            <React.Fragment key={index}>
                                <li>
                                    <span>V</span>
                                    <span>{item.name}</span>
                                    <NavLinkItem itemsCollection={item.subCategories} />
                                </li>
                            </React.Fragment>
                    )
                })
            }
        </ul>
    );
}

export default NavLinkItem