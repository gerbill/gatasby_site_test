import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function BlogPage({ data }) {
  console.log(data);
  return (
    <Layout pageTitle="My Glog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={node.frontmatter.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;
