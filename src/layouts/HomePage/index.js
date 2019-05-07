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