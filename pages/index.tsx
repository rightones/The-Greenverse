import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import en from "../data/en";
import { Data } from "../data";
import DSC01809 from "../public/image/DSC01809.png";
import DSC01874 from "../public/image/DSC01874.jpg";
import DSC01900 from "../public/image/DSC01900.png";
import DSC01967 from "../public/image/DSC01967.jpg";
import natick from "../public/image/natick.jpeg";
import ko from "../data/ko";

interface HomeProps {
    data: Data;
}

const Home = ({ data }: HomeProps) => {
    const router = useRouter();
    return (
        <>
            <Layout sidebar={<Sidebar />}>
                <Header>
                    <p>{data[0].content[0]}</p>
                    <p>{data[0].content[1]}</p>
                    <blockquote style={{ marginTop: "40px" }}>
                        {data[0].content[2]}
                        <br />
                        <br />
                        {data[0].content[3]}
                    </blockquote>
                </Header>
                <Section id="5m">
                    <h1>
                        <span className="title">{data[1].title}</span>
                    </h1>
                    <p>{data[1].content[0]}</p>
                    <figure>
                        <Image src={natick} />
                        <figcaption>{data[1].figure[0]}</figcaption>
                    </figure>
                    <p>{data[1].content[1]}</p>
                </Section>
                <Section id="15m">
                    <h1>
                        <span className="subtitle">Project 01.</span>
                        <span className="title">{data[2].title}</span>
                    </h1>
                    <figure>
                        <Image src={DSC01874} />
                        <figcaption>{data[2].figure[0]}</figcaption>
                    </figure>
                    <div className="row">
                        <figure>
                            <Image src={DSC01900} />
                            <figcaption>{data[2].figure[1]}</figcaption>
                        </figure>
                        <figure>
                            <Image src={DSC01967} />
                            <figcaption>{data[2].figure[2]}</figcaption>
                        </figure>
                    </div>
                    <blockquote style={{ textTransform: "uppercase", margin: "40px 0 16px 0" }}>
                        {data[2].content[0]}
                    </blockquote>
                    <blockquote style={{ textTransform: "uppercase", margin: "16px 0" }}>
                        {data[2].content[1]}
                    </blockquote>
                    <blockquote style={{ textTransform: "uppercase", margin: "16px 0" }}>
                        {data[2].content[2]}
                    </blockquote>
                    <blockquote style={{ textTransform: "uppercase", margin: "16px 0 40px 0" }}>
                        {data[2].content[3]}
                    </blockquote>
                    <figure>
                        <Image src={DSC01809} />
                        <figcaption>{data[2].figure[3]}</figcaption>
                    </figure>
                    <p>{data[2].content[4]}</p>
                </Section>
            </Layout>
        </>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = ({ locale }) => {
    if (locale === "ko") return { props: { data: ko } };
    return { props: { data: en } };
};

export default Home;
