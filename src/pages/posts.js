import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const renderPosts = data =>
  data.allWordpressPost.edges.map(post => (
    <li key={post.node.title}>{post.node.title}</li>
  ))

const Posts = ({ data }) => {
  return (
    <Layout>
      <h2>Minute Rice Posts</h2>
      <p>Some of these are shared, some are unique to this brand</p>
      <div>{renderPosts(data)}</div>
    </Layout>
  )
}

export default Posts

export const postsQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
        }
      }
    }
  }
`
