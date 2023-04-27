import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Integrate with any provider",
    // Svg: "https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/640ca38ad086fdd90ab76dc2_icon-feature-4-saasly-template.svg",
    description: (
      <>
        Aggregate multiple Large Language Models into one place through a single
        API or connect and sync data from anywhere.
      </>
    ),
  },
  {
    title: "Improve accuracy",
    // Svg: "https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/640ca38ad086fd8086b76dc3_icon-feature-6-saasly-template.svg",
    description: (
      <>
        Backtest your strategy and improve sentiment analysis, text moderation
        across Image, Video, Speech and Text.
      </>
    ),
  },
  {
    title: "Automate workloads",
    // Svg: "https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/640ca38ad086fd3635b76e06_favicon-saasly-template.svg",
    description: (
      <>
        Extend your capabilities by creating customized automated
        decision-making workflows. Improve team efficiency and make better
        decisions, faster.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <img className={styles.featureSvg} src={Svg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
