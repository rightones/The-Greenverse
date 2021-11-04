import { useRouter } from "next/router";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";

const Home = () => {
    const router = useRouter();
    return (
        <>
            <Header>
                <p>
                    {router.locale === "ko"
                        ? "밝은 공자는 하는 되려니와, 사막이다. 바로 목숨이 우리의 찬미를 힘차게 만물은 풍부하게 대고, 발휘하기 이것이다. 피는 뼈 주며, 따뜻한 살 너의 남는 미인을 것이다. 피고, 피부가 그들을 원질이 듣는다. 싸인 장식하는 따뜻한 끝까지 방황하여도, 두기 힘있다. 하였으며, 황금시대를 그들은 수 속잎나고, 창공에 사막이다. 커다란 인생을 속에 발휘하기 청춘을 이 전인 얼마나 방지하는 쓸쓸하랴? 온갖 그들은 예수는 있는 목숨이 같지 풍부하게 희망의 것이다. 창공에 아니한 가슴이 위하여서."
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus vel dolor tristique finibus bibendum sit amet nibh. Vivamus purus ipsum, ullamcorper sit amet purus at, feugiat aliquet nisl."}
                </p>
                <p>
                    {router.locale === "ko"
                        ? "우리 방황하였으며, 살 예수는 두기 싶이 인생을 황금시대다. 하여도 대고, 역사를 피어나는 봄바람이다. 불어 우리는 낙원을 이상이 듣기만 심장의 찬미를 칼이다. 든 끓는 품었기 뭇 새가 주는 우리 인도하겠다는 인생의 철환하였는가? 품으며, 우리의 못하다 더운지라 동산에는 끓는 듣는다. 있는 얼마나 있을 옷을 두손을 부패뿐이다. 뛰노는 무엇을 놀이 위하여, 없는 착목한는 주는 것이다. 옷을 눈에 꽃이 충분히 몸이 그들의 영원히 있는 사막이다. 같이 가치를 바이며, 속잎나고, 보배를 인류의 불어 우리 착목한는 칼이다."
                        : "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi vel purus egestas nunc mollis sagittis. In sed augue consectetur, aliquam arcu in, eleifend turpis."}
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

export default Home;
