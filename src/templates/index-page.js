import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
const yourModuleName = require('lazysizes')
//import 'lazysizes'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
  content,
  contentComponent,
}) =>
{
const PageContent = contentComponent || Content


return (

  <div>
    <div
      //className="full-width-image margin-top-0"
     /* style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}*/
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section is-paddingless section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title} <Link to="/contact/">contact Kerryanne </Link></h1>
                  </div>
                  <div className="column is-12">
                <PageContent className="content" content={content} />
                </div>
                  <div className="tile">
                    <h2 className="subtitle">{mainpitch.description} </h2>
                  </div>
                  <div className="tile">
                  <h2 className="subtitle"> <Link to="/contact/">Contact Kerryanne today!</Link> </h2>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  main: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
