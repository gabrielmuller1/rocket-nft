import styles from './styles.module.scss';

export default function Example() {
    return (
        <>
            <div className={styles.content}>


                {/* <div className={styles.box1}>
                    <div className={styles.box2}>
                        <div className={styles.box3}>

                        </div>
                    </div>
                </div> */}


                <div className={styles.boxMain}>
                    
                <div className={styles.box1}></div>
                <div className={styles.box2}></div>
                <div className={styles.box3}></div>

                </div>



            </div>
        </>
    )
}