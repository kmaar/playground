import React from 'react'
import { makeBlogPath } from '../utils'
import { graphql } from 'gatsby'
import dateformat from 'dateformat'

import axios from 'axios'

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

const min = 100000
const max = 800999

const getInventory = async () => {
  try {
    return await axios.get(`https://steamcommunity.com/inventory/76561197960${getRandomArbitrary(min, max)}/730/2?l=english&count=5000`)
  } catch (e) {
    console.log(e)
  }
}

getInventory().then(response => {
  console.log(response)
  // setResults(response ? response.data : null)
})

getInventory()

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    {data.cms.blogPosts.map((blog, i) => (
      <a key={i} href={makeBlogPath(blog)}>
        <h2>
          {dateformat(blog.createdAt, 'fullDate')} - {blog.title}
        </h2>
      </a>
    ))}
  </div>
)

export const query = graphql`
  query {
    cms {
      blogPosts(orderBy: createdAt_DESC) {
        title
        createdAt
        slug
      }
    }
  }
`
