import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styles from './HomePage.module.css';

const  HomePageLayout = () => (
  <StaticQuery
    query={ avatarQuery }
    render={ data => {
      // const { children } = this.props;

      return (
        <div className={ styles.header }>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            // alt={author}
          />
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
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;