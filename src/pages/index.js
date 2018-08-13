import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const renderRecipes = data =>
  data.allWordpressWpRecipes.edges.map(recipe => (
    <li key={recipe.node.title}>{recipe.node.title}</li>
  ))

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Riviana White Label Recipes</h1>
    <p>This is pulling in custom recipes from WP</p>
    <Link to="/posts/">Go to posts (including shared content)</Link>
    <hr style={{ marginTop: '40px', marginBottom: '40px' }} />
    <h2>Recipes</h2>
    <div>{renderRecipes(data)}</div>
  </Layout>
)

export default IndexPage

export const recipeQuery = graphql`
  query {
    allWordpressWpRecipes {
      edges {
        node {
          title
        }
      }
    }
  }
`
