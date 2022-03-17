import React from 'react'
import styles from './Project.module.css'
import '../../App.css'
import { motion, Variants } from "framer-motion"

export default function Projects() {


    const modalOne = (
        <div className={styles.modal}>
            <div className='flex-center'>
                <a target="_blank" rel="noreferrer" href='https://github.com/TheRealKai/crypto-stats' className="light-btn btn">See Code</a>
                <a target="_blank" rel="noreferrer" href='https://therealkai.github.io/crypto-stats/' className="light-btn btn">See Live</a>
            </div>
        </div>
    )
    const modalTwo = (
        <div className={styles.modal}>
            <div className='flex-center'>
                <a target="_blank" rel="noreferrer" href='https://github.com/TheRealKai/nft-spotter' className="light-btn btn">See Code</a>
                <a target="_blank" rel="noreferrer" href='https://therealkai.github.io/nft-spotter/' className="light-btn btn">See Live</a>
            </div>
        </div>
    )
    const modalThree = (
        <div className={styles.modal}>
            <div className='flex-center'>
                <a target="_blank" rel="noreferrer" href='https://github.com/TheRealKai/discord-chat' className="light-btn btn">See Code</a>
                <a target="_blank" rel="noreferrer" href='https://therealkai.github.io/discord-chat/' className="light-btn btn">See Live</a>
            </div>
        </div>
    )




    return (

        <section id='projects'>
            <h2 size="lg">Projects</h2>

            <div className={styles.container}>
                <motion.div
                    className={styles.row}
                    initial={{ x: '=100%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    amount={"some"}
                    viewport={{ once: true }}
                    transition={{ ease: [0.6, 0.2, 0.1, 1], duration: 1.2, delay: 1 }}
                >
                    <div className={styles.imageDiv}>
                        <img className={styles.image} src="images/mockups/cryptostats.png" alt="Cryptostats project" />
                        {modalOne}
                    </div>
                    <div className={styles.textDiv}>
                        <h3 className={styles.header}>Crypto Stats</h3>
                        <p>Crypto Stats is a web app that displays information about the Crypto Currency market. Includes
                            useful information about prices, percent changes, ranks, marketcap, and sparklines. Created with
                            Coingecko, Coinmarketcap, and Etherscan Apis.
                        </p>
                        <div className={styles.iconContainer}>
                            <img src="images/icons/react.png" title='React.js' width="40" alt="react" />
                            <img src="images/icons/html.png" width="40" title='HTML' alt="html" />
                            <img src="images/icons/css.png" width="40" title='CSS' alt="css" />
                            <img src="images/icons/material.png" width="40" title='Material-UI' alt="material ui" />
                            <img src="images/icons/api.png" width="40" title='API' alt="api" />
                            <img src="images/icons/react-router.png" width="40" title='React router' alt="React router" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.row}
                    initial={{ x: '-100%', opacity: 0 }}
                    amount={"some"}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: [0.6, 0.2, 0.1, 1], duration: 1, delay: 0.2 }}
                >
                    <div className={styles.imageDiv}>
                        <img className={`${styles.image} ${styles.nftSpotter}`} src="images/mockups/nft-spotter-mockup.png" alt="NFT Spotter project" />
                        {modalTwo}
                    </div>
                    <div className={styles.textDiv}>
                        <h3 className={styles.header}>NFT Spotter</h3>
                        <p>Nft Spotter is a web app that displays information about the NFT Market, created with Opensea and Rarible API. This site
                            has information like Top 100, Marketcap, Floor prices, and much more! Built with modern tools such as React.js React Router, and React Bootstrap.
                        </p>
                        <div className={styles.iconContainer}>
                            <img src="images/icons/react.png" title='React.js' width="40" alt="react" />
                            <img src="images/icons/html.png" width="40" title='HTML' alt="html" />
                            <img src="images/icons/css.png" width="40" title='CSS' alt="css" />
                            <img src="images/icons/bootstrap.png" width="40" height="40" title='React Bootstrap' alt="material ui" />
                            <img src="images/icons/api.png" width="40" title='API' alt="api" />
                            <img src="images/icons/react-router.png" width="40" title='React router' alt="React router" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.row}
                    initial={{ x: '-100%', opacity: 0 }}
                    amount={"some"}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: [0.6, 0.2, 0.1, 1], duration: 1, delay: 0.2 }}
                >
                    <div className={styles.imageDiv}>
                        <img className={`${styles.image} ${styles.discord}`} src="images/mockups/discord-iphone.png" alt="Discord app project" />
                        {modalThree}
                    </div>
                    <div className={styles.textDiv}>
                        <h3 className={styles.header}>Discord Chat</h3>
                        <p>
                            Discord Chat is a realtime chat app that allows you to talk to friends anywhere. The design is created with Tailwind css based on the popular app Discord.
                            Firebase is used for the backend, it is a CRD app, meaning you can create, read, and delete messages.
                        </p>
                        <div className={styles.iconContainer}>
                            <img src="images/icons/react.png" title='React.js' width="40" alt="react" />
                            <img src="images/icons/html.png" width="40" title='HTML' alt="html" />
                            <img src="images/icons/css.png" width="40" title='CSS' alt="css" />
                            <img src="images/icons/tailwind-css.png" width="40" title='Tailwind css' alt="tailwind" />
                            <img src="images/icons/firebase.png" width="40" title='Firebase' alt="Firebase" />
                            <img src="images/icons/react-router.png" width="40" title='React router' alt="React router" />
                        </div>

                    </div>


                </motion.div>

            </div>



        </section >
    )
}
