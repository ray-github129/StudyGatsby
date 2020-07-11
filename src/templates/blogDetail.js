import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import { Container } from "react-bootstrap"

export const query = graphql`
    query( $slug: String!){
        markdownRemark(
            fields:{
            slug:{
                eq: $slug
            }
            }    
        ){
        frontmatter{
            title
            date
        }
        html
        }
    }
`

function BlogDetail(props) {
    return (
        <Layout>
            <Container >
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.data}</p>
                <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
            </Container >
        </Layout>
    )
}

export default BlogDetail