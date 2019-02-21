import React from 'react'
import { Link, graphql } from 'gatsby'

import HomePageLayout from 'layouts/HomePage';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <HomePageLayout>

      </HomePageLayout>
    )
  }
}

export default BlogIndex