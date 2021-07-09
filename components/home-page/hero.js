import Image from 'next/image'

import classes from '../../styles/hero.module.css';

function Hero () {
    return (
        <section className={classes.hero}>
            <div className={classes.image}> 
                <Image 
                    src="/images/site/TrasaWF_28_04_21.png" 
                    alt="Mój obrazek" 
                    width={300} 
                    height={300} />
            </div>
            <h1>Cześć, jestem Michał</h1>
            <p>Mój blog o pogodzie - klimat Polski</p>
        </section>
    );

}

export default Hero;