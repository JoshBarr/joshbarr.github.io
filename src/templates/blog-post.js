import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import PostMetadata from '../components/PostMetadata'
import Author from '../components/Author'
import Tag from '../components/Tag'
import SubscribeWidget from '../components/SubscribeWidget';


export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title}`}
        description={post.frontmatter.blurb}
        thumbnail={post.frontmatter.cover_image.childImageSharp.fixed}
      />
      <div className="container">
        <div className="section-top">
          <h1 className="">{post.frontmatter.title}</h1>
        </div>

        <div className="split section-small">
          <div className="sidebar">
            <Author
              author={post.frontmatter.authors[0]}
              date={post.frontmatter.date}
            />
            <h6 className="keyline--top theme-border space--tight">
              Post tags:
            </h6>
            <ul className={`small font-primary list-unstyled`}>
              {post.frontmatter.tags.map(tag => (
                <li key={tag}>
                  <Tag tag={tag} />
                </li>
              ))}
            </ul>
          </div>
          <div className="article theme--light">
            <p className="intro">{post.frontmatter.blurb}</p>
            {/* <Img fluid={post.frontmatter.cover_image.childImageSharp.fluid}></Img> */}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            {/* {post.frontmatter.attachments && 
              post.frontmatter.attachments.map((fileObj) => {
                console.log(fileObj);
                return <a href={fileObj.publicURL}>Download</a>
              })
            } */}
            <div className="subscribe subscribe--centered">
              <SubscribeWidget />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        blurb
        tags
        cover_image {
          childImageSharp {
            fluid(maxWidth: 880) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 1200, height: 628) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        attachments {
          publicURL
        }
        authors {
          id
          name
          image {
            childImageSharp {
              fixed(width: 40, height: 40) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
