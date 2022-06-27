import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/victor.jpg"
          alt="An image showing Victor"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Victor, PANGET MO!</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or Next.
      </p>
    </section>
  );
}

export default Hero;
