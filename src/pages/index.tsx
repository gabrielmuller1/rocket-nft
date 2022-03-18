import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rocket NFT</title>
      </Head>

      <section style={{ 'backgroundImage': `url('assets/background.png')` }}>
        <Header />

        <div className={styles.nftContent}>

          <div className={styles.nftInfo}>
            <div className={styles.nftManyArtists}>
              <p>Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
                Compre, venda e descubra ativos digitais exclusivos para você.</p>
              <div className={styles.wrapperArtist}>
                <div className={styles.wrapperImgArtists}>
                  <img src="/assets/artista-1.png" className={styles.img1} />
                  <img src="/assets/artista-2.png" className={styles.img2} />
                  <img src="/assets/artista-3.png" className={styles.img3} />
                  <img src="/assets/artista-4.png" className={styles.img4} />
                </div>
                <div>
                  <p>+10</p>
                  <p>Artista selecionados</p>
                </div>
              </div>
            </div>
            <div className={styles.nftTitle}>
              <h1>Descubra a verdadeira
                arte digital e colecione diversas <span>NFTs</span> </h1>
            </div>
            <div className={styles.nftImage}>
              <img src="assets/badge.svg" alt="" />
            </div>
          </div>

          <div className={styles.gridAstronauts}>
            <img src="/assets/galeria-1.png" alt="" />
            <img src="/assets/galeria-2.png" alt="" />
            <img src="/assets/galeria-3.png" alt="" />
            <img src="/assets/galeria-4.png" alt="" />
            <img src="/assets/galeria-5.png" alt="" />
            <img src="/assets/galeria-6.png" alt="" />
            <img src="/assets/galeria-7.png" alt="" />
            <img src="/assets/galeria-8.png" alt="" />

          </div>

        </div>

      </section>

      {/* conteudo sobre o projeto */}
      <section className={styles.infoSale}>
        <div className={styles.allInfoSaleNft}>
          <span>
            10k+
            <strong>Artes</strong>
          </span>
          <span>
            200+
            <strong>Vendas</strong>
          </span>
          <span>
            20
            <strong>Artistas</strong>
          </span>
        </div>
        <div className={styles.allDescriptionSaleNft}>
          <div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure deleniti iusto odio enim quos ad et? Mollitia delectus expedita accusantium laboriosam fugit, explicabo suscipit porro magni, vel, reiciendis dolor?</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure deleniti iusto odio enim quos ad et? Mollitia delectus expedita accusantium laboriosam fugit, explicabo suscipit porro magni, vel, reiciendis dolor?</span>
          </div>
          <img src="assets/banner.png" alt="" />
        </div>
      </section>

      {/* populares da semana */}
      <section className={styles.popularOfTheWeek}>
        <h2>
          <span>Populares</span> da semana
        </h2>

        <div className={styles.popularContent}>

          <div className={styles.popularLeft}>
            <div className={styles.popularCard}>
              <h3>Astronauta 1</h3>
              <div className={styles.popularCardTitle}>
                <h4>Mayk Brito</h4>
                <span>150RKT</span>
              </div>
              <img src="assets/galeria-1.png" alt="" />
            </div>
            <div className={styles.popularCard}>
              <h3>Astronauta 2</h3>
              <div className={styles.popularCardTitle}>
                <h4>Mayk Brito</h4>
                <span>150RKT</span>
              </div>
              <img src="assets/galeria-2.png" alt="" />
            </div>
          </div>

          <div className={styles.popularRight}>
            <div className={styles.popularCard}>
              <h3>Astronauta 3</h3>
              <div className={styles.popularCardTitle}>
                <h4>Mayk Brito</h4>
                <span>150RKT</span>
              </div>
              <img src="assets/galeria-3.png" alt="" />
            </div>
            <div className={styles.popularCard}>
              <h3>Astronauta 4</h3>
              <div className={styles.popularCardTitle}>
                <h4>Mayk Brito</h4>
                <span>150RKT</span>
              </div>
              <img src="assets/galeria-4.png" alt="" />
            </div>
          </div>



        </div>

      </section>

      {/* Melhores artistas */}
      <section className={styles.theBestArtistsContainer}>
        <div className={styles.title}>
          <h2>Melhores <span>artistas</span></h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.cardArtist}>
            <img src="assets/artista-1.png" alt="" />
            <div>
              <h4>Mayk Brito</h4>
              <span>80 Fotografia</span>
            </div>
          </div>
          <div className={styles.cardArtist}>
            <img src="assets/artista-1.png" alt="" />
            <div>
              <h4>Mayk Brito</h4>
              <span>80 Fotografia</span>
            </div>
          </div>
          <div className={styles.cardArtist}>
            <img src="assets/artista-1.png" alt="" />
            <div>
              <h4>Mayk Brito</h4>
              <span>80 Fotografia</span>
            </div>
          </div>
          <div className={styles.cardArtist}>
            <img src="assets/artista-1.png" alt="" />
            <div>
              <h4>Mayk Brito</h4>
              <span>80 Fotografia</span>
            </div>
          </div>
          <div className={styles.cardArtist}>
            <img src="assets/artista-1.png" alt="" />
            <div>
              <h4>Mayk Brito</h4>
              <span>80 Fotografia</span>
            </div>
          </div>
          <div className={styles.cardArtist}>
            <img src="assets/artista-1.png" alt="" />
            <div>
              <h4>Mayk Brito</h4>
              <span>80 Fotografia</span>
            </div>
          </div>
        </div>
        <div className={styles.moreArtists}>
          <span>Ver todos os artistas</span>
          <img src="assets/arrow-orange.svg" alt="" />
        </div>
      </section>


      {/* footer */}
      <footer className={styles.footer}>
        <div className={styles.contentFooter}>
          <div className={styles.titleFooter}>
            <h4>Rocket <span>NFTs</span></h4>
            <img src="assets/arrow-black.svg" alt="" />
          </div>
          
          <div className={styles.menuFooter}>
            <div className={styles.columnOne}>
              <h4>Fique por dentro de<br /><span>todas as novidades</span></h4>
              <div className={styles.formInputEmail}>
                <input placeholder='nft@test.com' type="email" />
                <button>Enviar</button>
              </div>
            </div>
            <div className={styles.columnTwo}>
              <div className={styles.optionsMenu}>
                <h4>Empresa</h4>
                <span>Sobre</span>
                <span>Serviços</span>
                <span>Time</span>
                <span>Carreira</span>
              </div>
              <div className={styles.optionsMenu}>
                <h4>Mapas</h4>
                <span>Sobre</span>
                <span>Serviços</span>
                <span>Time</span>
                <span>Carreira</span>
              </div>
              <div className={styles.optionsMenu}>
                <h4>Links</h4>
                <span>Sobre</span>
                <span>Serviços</span>
                <span>Time</span>
                <span>Carreira</span>
              </div>
            </div>
          </div>

          <div className={styles.socialMedia}>
            <strong>wwww.teste.com.br</strong>
            <div className={styles.optionsSocialMedia}>
              <img src="assets/youtube.svg" alt="" />
              <img src="assets/instagram.svg" alt="" />
              <img src="assets/twitter.svg" alt="" />
              <img src="assets/youtube.svg" alt="" />
            </div>
          </div>


        </div>
      </footer>

    </div>
  )
}

export default Home
