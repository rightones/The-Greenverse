import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Image from "next/image";
import styled, { css } from "styled-components";
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
import natick2 from "../public/image/natick2.jpg";
import natick3 from "../public/image/natick3.jpg";
import ko from "../data/ko";
import Footer from "../components/Footer";
import Info from "../components/Info";
import FootNote from "../components/FootNote";

const Button = styled.a`
    background-color: ${({ theme }) => theme.color.blue};
    padding: 16px;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: white;
    border-radius: 16px;
    display: block;
    box-sizing: border-box;
    cursor: pointer;
`;

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
                        <Image src={natick} alt={data[1].figure[0]} />
                        <figcaption>{data[1].figure[0]}</figcaption>
                    </figure>
                    <p>{data[1].content[1]}</p>
                </Section>
                <Section id="12m">
                    <h1>
                        <span className="title">{data[2].title}</span>
                    </h1>
                    <p>{data[2].content[0]}</p>
                    <figure>
                        <Image src={natick2} alt={data[2].figure[0]} />
                        <figcaption>{data[2].figure[0]}</figcaption>
                    </figure>
                    <p>{data[2].content[1]}</p>
                    <p>{data[2].content[2]}</p>
                    <figure>
                        <Image src={natick3} alt={data[2].figure[1]} />
                        <figcaption>{data[2].figure[1]}</figcaption>
                    </figure>

                    <p>{data[2].content[3]}</p>
                    <p>{data[2].content[4]}</p>
                </Section>
                <Section id="19m">
                    <h1>
                        <span className="subtitle">Project 01.</span>
                        <span className="title">{data[3].title}</span>
                    </h1>
                    <figure>
                        <Image src={DSC01874} alt={data[3].figure[0]} />
                        <figcaption>{data[3].figure[0]}</figcaption>
                    </figure>
                    <div className="row">
                        <figure>
                            <Image src={DSC01900} alt={data[3].figure[1]} />
                            <figcaption>{data[3].figure[1]}</figcaption>
                        </figure>
                        <figure>
                            <Image src={DSC01967} alt={data[3].figure[2]} />
                            <figcaption>{data[3].figure[2]}</figcaption>
                        </figure>
                    </div>
                    <blockquote style={{ textTransform: "uppercase", margin: "40px 0 0 0" }}>
                        {data[3].content[0]}
                    </blockquote>
                    <p style={{ marginTop: 4 }}>{data[3].content[1]}</p>
                    <blockquote style={{ textTransform: "uppercase", margin: "16px 0 0" }}>
                        {data[3].content[2]}
                    </blockquote>
                    <p style={{ marginTop: 4 }}>{data[3].content[3]}</p>

                    <blockquote style={{ textTransform: "uppercase", margin: "16px 0 0" }}>
                        {data[3].content[4]}
                    </blockquote>
                    <p style={{ marginTop: 4 }}>{data[3].content[5]}</p>

                    <blockquote style={{ textTransform: "uppercase", margin: "16px 0 0" }}>
                        {data[3].content[6]}
                    </blockquote>
                    <p style={{ marginTop: 4 }}>{data[3].content[7]}</p>

                    <figure>
                        <Image src={DSC01809} alt={data[3].figure[3]} />
                        <figcaption>{data[3].figure[3]}</figcaption>
                    </figure>
                </Section>
                <Section id="27m">
                    <h1>
                        <span className="subtitle">Project 02.</span>
                        <span className="title">{data[4].title}</span>
                    </h1>
                    <figure>
                        <audio
                            controls
                            src="/audio.m4a"
                            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate "
                        />

                        <figcaption>{data[4].figure[6]}</figcaption>
                    </figure>
                    <p>{data[4].content[0]}</p>
                    <figure style={{ marginBottom: "32px" }}>
                        <video autoPlay loop muted>
                            <source src="/video/1.webm" type="video/webm" />
                            <source src="/video/1_1.mp4" type='video/mp4; codecs="hvc1"' />
                            <source src="/video/1.mp4" type="video/mp4" />
                        </video>
                        <figcaption>{data[4].figure[0]}</figcaption>
                    </figure>

                    <figure style={{ width: "230px", marginBottom: "32px" }}>
                        <video autoPlay loop muted>
                            <source src="/video/2.webm" type="video/webm" />
                            <source src="/video/2_1.mp4" type='video/mp4; codecs="hvc1"' />
                            <source src="/video/2.mp4" type="video/mp4" />
                        </video>
                        <figcaption>{data[4].figure[1]}</figcaption>
                    </figure>

                    <figure style={{ width: "230px", float: "right", marginBottom: "32px" }}>
                        <video autoPlay loop muted>
                            <source src="/video/3.webm" type="video/webm" />
                            <source src="/video/3_1.mp4" type='video/mp4; codecs="hvc1"' />
                            <source src="/video/3.mp4" type="video/mp4" />
                        </video>
                        <figcaption>{data[4].figure[2]}</figcaption>
                    </figure>

                    <figure style={{ width: "147px", clear: "right", marginBottom: "32px" }}>
                        <video autoPlay loop muted>
                            <source src="/video/4.webm" type="video/webm" />
                            <source src="/video/4_1.mp4" type='video/mp4; codecs="hvc1"' />
                            <source src="/video/4.mp4" type="video/mp4" />
                        </video>
                        <figcaption>{data[4].figure[3]}</figcaption>
                    </figure>
                    <figure style={{ marginBottom: "32px" }}>
                        <video autoPlay loop muted>
                            <source src="/video/6.webm" type="video/webm" />
                            <source src="/video/6_1.mp4" type='video/mp4; codecs="hvc1"' />
                            <source src="/video/6.mp4" type="video/mp4" />
                        </video>
                        <figcaption>{data[4].figure[4]}</figcaption>
                    </figure>
                    <figure style={{ marginBottom: "32px" }}>
                        <video autoPlay loop muted>
                            <source src="/video/7.webm" type="video/webm" />
                            <source src="/video/7_1.mp4" type='video/mp4; codecs="hvc1"' />
                            <source src="/video/7.mp4" type="video/mp4" />
                        </video>
                        <figcaption>{data[4].figure[5]}</figcaption>
                    </figure>

                    <p>{data[4].content[1]}</p>
                </Section>
                <Section id="35m">
                    <h1>
                        <span className="subtitle">Project 03.</span>
                        <span className="title">{data[5].title}</span>
                    </h1>
                    <p>{data[5].content[0]}</p>
                    <figure>
                        <Image src={DSC01874} alt={data[3].figure[0]} />
                    </figure>
                    <Button className="button" onClick={() => alert("준비 중입니다.")}>
                        {data[5].figure[0]}
                    </Button>
                </Section>
            </Layout>
            <FootNote />
            <Footer />
            <Info />
        </>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = ({ locale }) => {
    if (locale === "ko") return { props: { data: ko } };
    return { props: { data: en } };
};

export default Home;
