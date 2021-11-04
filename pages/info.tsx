import Header from "../components/Header";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";

const InfoPage = () => {
    return (
        <>
            <Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus vel dolor tristique finibus
                    bibendum sit amet nibh. Vivamus purus ipsum, ullamcorper sit amet purus at, feugiat aliquet nisl.
                </p>
                <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi
                    vel purus egestas nunc mollis sagittis. In sed augue consectetur, aliquam arcu in, eleifend turpis.
                </p>
            </Header>
            <Layout sidebar={<Sidebar />}>
                <Section>
                    <h1>We ARE livING in a Knotted World</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus vel dolor tristique
                        finibus bibendum sit amet nibh. Vivamus purus ipsum, ullamcorper sit amet purus at, feugiat
                        aliquet nisl.
                    </p>
                    <p>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Morbi vel purus egestas nunc mollis sagittis. In sed augue consectetur, aliquam arcu in,
                        eleifend turpis.
                    </p>
                </Section>
                <Section>
                    <h1>We ARE livING in a Knotted World</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus vel dolor tristique
                        finibus bibendum sit amet nibh. Vivamus purus ipsum, ullamcorper sit amet purus at, feugiat
                        aliquet nisl.
                    </p>
                    <p>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Morbi vel purus egestas nunc mollis sagittis. In sed augue consectetur, aliquam arcu in,
                        eleifend turpis.
                    </p>
                </Section>
            </Layout>
        </>
    );
};

export default InfoPage;
