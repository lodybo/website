import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styles from './HomePage.module.css';

const  HomePageLayout = () => (
  <StaticQuery
    query={ avatarQuery }
    render={ data => {
      const { author } = data.site.siteMetadata;

      return (
        <>
          <div className={ styles.header }>
            <Image
              className={ styles.avatar }
              fixed={ data.avatar.childImageSharp.fixed }
              alt={ author }
            />

            <h1 className={ styles.title }>
              Hi! I'm <em>Lody</em>, and I'm a front-end developer.
            </h1>

            <h2 className={ styles.subtitle }>
              I live in the Netherlands, work at <a href="https://www.taf.nl" target="_blank" rel="noopener noreferrer">TAF</a>, and make a <a href="https://www.themarch.nl" target="_blank" rel="noopener noreferrer">bit of music too</a>.
            </h2>
          </div>

          <div className={ styles.info }>
            <div>
              <p>
                To see some of the very cool people and organisations I've worked with, or the certificates that I got, take a look at my <a href="https://www.linkedin.com/in/lodybo" target="_blank" rel="noopener nofollower">LinkedIn profile</a>.
              </p>

              <p>You can also find me on:</p>
              <ul>
                <li>
                  <a href="https://www.twitter.com/lodybo" target="_blank" rel="noopener nofollower">
                    Twitter
                  </a>
                </li>

                <li>
                  <a href="https://www.github.com/lodybo" target="_blank" rel="noopener nofollower">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <em>A form should appear here...</em>
            </div>
          </div>
        </>
      );
    }}
  />
)

export default HomePageLayout;

const avatarQuery = graphql`
  query AvatarQuery {
    avatar:file(absolutePath: { regex: "/ava.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;