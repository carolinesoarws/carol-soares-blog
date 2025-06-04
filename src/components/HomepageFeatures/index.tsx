import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import resumeImg from '@site/static/img/resume.jpeg';
import blogImg from '@site/static/img/blog.jpeg';
import docsImg from '@site/static/img/documentation.jpeg';

type FeatureItem = {
  title: string;
  imgSrc?: string; // Adiciona suporte para imagens JPEG/PNG
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Currículo',
    imgSrc: resumeImg,    
    description: <>Learn more about my career.</>,
  },
  {
    title: 'Blog',
    imgSrc: blogImg,
    description: <>A place for us to talk about different topics.</>,
  },
  {
    title: 'Docs',
    imgSrc: docsImg,
    description: <>Technical documentation I’ve written.</>,
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {imgSrc && <img src={imgSrc} className={styles.featureSvg} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
