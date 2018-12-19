import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styles from './Bio.module.css';

const Bio = () => (
  <StaticQuery
      query={bioQuery}
      render={ data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div className={ styles.wrapper }>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className={ styles.avatar }
            />
            <div>
              <p>
                <strong>{ author }</strong>
                <br />
                Lives in The Netherlands. Dislikes swimming. Likes <a href="https://twitter.com/KayleeRosalina" target="_blank" rel="noopener nofollower">Kaylee</a>
              </p>

              <p>
                <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener nofollower">
                  You should follow him on Twitter!
                </a>
              </p>
            </div>
          </div>
        );
      }}
    />
);

const bioQuery = graphql`
  query BioQuery {
    avatar:file(absolutePath: { regex: "/ava.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;