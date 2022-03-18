import styles from './styles.module.scss';

export default function Header() {
    return (
        <div className={styles.container}>
            <a href="teste">teste</a>
            <div className={styles.content}>
                <img src="/assets/logo.svg" alt="Logo header" />
                <nav>
                    <a>Comprar NFT</a>
                    <a>Sobre</a>
                    <a>FAQ</a>
                </nav>
                <button className={styles.readyButton}>
                    <img src="assets/logo_MetaMask.svg" alt="" />
                    <p>Conectar carteira</p>
                </button>
            </div>
        </div>
    )
}