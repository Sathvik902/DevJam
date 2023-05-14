import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        magna et fermentum facilisis, sapien turpis mattis libero, ac ultrices
        augue odio in arcu. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Sed vestibulum nibh eget
        massa placerat dapibus. Vivamus sed massa turpis. Integer varius urna
        vel dolor bibendum, in ullamcorper metus aliquet. Aliquam erat volutpat.
      </p>
      <p className={styles.text}>
        Suspendisse sit amet purus condimentum, tincidunt nibh at, feugiat elit.
        Etiam efficitur tincidunt turpis, vel bibendum ex consectetur quis.
        Proin commodo magna in massa faucibus dictum. Praesent vel justo quis
        arcu consequat suscipit. In in urna euismod, commodo quam ac, varius
        sapien. Sed eget bibendum ex, nec varius lorem. Fusce euismod fermentum
        purus ac ultrices. Sed id turpis neque. Nunc laoreet, velit quis
        vulputate dignissim, purus enim pellentesque mi, eu sollicitudin justo
        nisl at dolor. Nam quis arcu auctor, rhoncus orci vel, imperdiet arcu
      </p>
    </div>
  );
};

export default About;
