import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex !== 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex !== 2 ? sliderIndex + 1 : 0);
    }
  };


  return (
    <div className={styles.container}>
      <div
        onClick={() => handleArrow("left")}
        className={styles.arrowContainer}
        style={{ left: 0 }}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * sliderIndex}vw)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.imgContainer}>
            <Image src={image} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        onClick={() => handleArrow("right")}
        className={styles.arrowContainer}
        style={{ right: 0 }}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
