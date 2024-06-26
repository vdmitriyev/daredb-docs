import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Contributions are welcome',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Contributions are welcome: <a href="https://github.com/dmarro89/dare-db">dare-db</a>
      </>
    ),
  },
  {
    title: 'DareDB',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Dare-DB is a lightweight in-memory database written in Go, featuring Redis-inspired hashtables 
       and HTTP/HTTPS endpoints for seamless data storage and retrieval, with Docker support for easy deployment
      </>
    ),
  },
  {
    title: 'go-redis-hashtable',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Based on the go implementation of the Redis hashtable <a href="https://github.com/dmarro89/go-redis-hashtable">go-redis-hashtable</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
