import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
    // Get the blog data
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    // Used to validate if ID is one of the following paths
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    )
}