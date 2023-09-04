import Image from 'next/image';
import styles from './hero.module.css';
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/SWS.jpg'
          alt='show me'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm wonseok</h1>
      <p>웹 개발에 관한 블로그</p>
    </section>
  );
}
export default Hero;
