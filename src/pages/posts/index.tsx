import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from '@prismicio/client';
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time> 12 de março de 2021</time>
                        <strong>Creating a Mono repo with let</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi porro perferendis assumenda ipsam rerum, pariatur facere dolorem nam molestiae dolores sit velit magnam obcaecati maiores, accusantium labore tempora voluptatem!
                        </p>
                    </a>
                    <a href="">
                        <time> 12 de março de 2021</time>
                        <strong>Creating a Mono repo with let</strong>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi porro perferendis assumenda ipsam rerum, pariatur facere dolorem nam molestiae dolores sit velit magnam obcaecati maiores, accusantium labore tempora voluptatem!
                        </p>
                    </a>
                    <a href="">
                        <time> 12 de março de 2021</time>
                        <strong>Creating a Mono repo with let</strong>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi porro perferendis assumenda ipsam rerum, pariatur facere dolorem nam molestiae dolores sit velit magnam obcaecati maiores, accusantium labore tempora voluptatem!
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}


export const getStaticProps: GetStaticProps = async () =>{
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type','publication')
    ],{
        fetch: ['publication.title','publication.content'],
        pageSize: 100,
    })
        console.log(JSON.stringify(response, null, 2))
    return{
        props: {}
    }
}
