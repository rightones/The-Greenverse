import styled from "styled-components";
import Image from "next/image";
import { atom, useRecoilState } from "recoil";
import { animated, config, useTransition } from "react-spring";
import logotype from "../../public/image/logotype.png";
import nabi from "../../public/image/logo/nabi.png";
import kf from "../../public/image/logo/kf.png";
import brit from "../../public/image/logo/brit.png";
import sb from "../../public/image/logo/sb.png";
import wshed from "../../public/image/logo/wshed.png";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    overscroll-behavior-y: contain;
    overflow-y: scroll;
`;

const Container = styled.div`
    max-width: 480px;
    display: grid;
    grid-template-columns: auto;
    gap: 24px;
    padding-top: 24px;
    align-content: center;
    width: 100%;

    button {
        background: ${({ theme }) => theme.color.blue};
        border-radius: 12px;
        height: 24px;
        color: white;
        padding: 4px 10px 5px;
        width: min-content;
        margin: 0 auto;
        cursor: pointer;
    }
`;

const Section = styled.div`
    border-radius: 12px;
    background: ${({ theme }) => theme.color.background};
    padding: 0 24px;
    align-self: center;
    align-items: center;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    p {
        color: ${({ theme }) => theme.color.blue};
    }
`;

const SectionHeader = styled.div`
    margin: 0 -24px;
    background: ${({ theme }) => theme.color.blue};
    padding: 40px 24px;
    width: 100%;
    text-align: center;
    p {
        color: white;
        font-family: "Documan", "IBM Plex Sans KR", -apple-system, BlinkMacSystemFont, system-ui, Roboto,
            "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
    .item {
        display: grid;
        grid-template-columns: auto;
        align-content: start;
    }
    .image {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
    }
`;

export const InfoStore = atom({ key: "infoStore", default: false });

const Info = () => {
    const [state, setState] = useRecoilState(InfoStore);
    const transitions = useTransition(state, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: state,
        config: config.default,
    });

    const transitions1 = useTransition(state, {
        from: { opacity: 0, transform: "translateY(100%)" },
        enter: { opacity: 1, transform: "translateY(0)" },
        leave: { opacity: 0, transform: "translateY(100%)" },
        reverse: state,
        config: config.default,
        delay: 100,
    });

    const transitions2 = useTransition(state, {
        from: { opacity: 0, transform: "translateY(100%)" },
        enter: { opacity: 1, transform: "translateY(0)" },
        leave: { opacity: 0, transform: "translateY(100%)" },
        reverse: state,
        config: config.default,
        delay: 200,
    });

    return (
        <>
            {transitions(
                (styles, item) =>
                    item && (
                        <animated.div style={{ ...styles, position: "fixed", top: 0, right: 0, left: 0, bottom: 0 }}>
                            <Wrapper>
                                <Container>
                                    <button onClick={() => setState(false)}>Close</button>
                                    {transitions1(
                                        (styles1, item1) =>
                                            item1 && (
                                                <animated.div style={styles1}>
                                                    <Section style={{ paddingTop: 40, paddingBottom: 32 }}>
                                                        <Image
                                                            src={logotype}
                                                            alt="Illogical Love"
                                                            width={152}
                                                            height={24}
                                                        />
                                                        <div style={{ height: 16 }} />
                                                        <p>
                                                            비논리적인 사랑은 다양한 생물 종과 물질 간의 연대의 가능성을
                                                            실험한다. 이찬우와 곽수아는 해저 데이터센터에서 출발하여
                                                            자연스러운 것과 부자연스러운 것, 인간과 비인간의 이분법을
                                                            흐트러뜨리는 공생의 방법을 탐구한다.
                                                        </p>
                                                        <p>
                                                            작품은 비논리적인 사랑을 매개로 다양한 행위자가 얽혀있는
                                                            유토피아적 공동체를 만드는 것을 목표로 한 프로젝트 그룹의
                                                            웹사이트이다. 퀴어 생태학, 생동하는 물질, 답변-가능성을
                                                            중심으로 다양한 사회운동과 비인간과의 대화 시도 방법이
                                                            소개된다.
                                                        </p>
                                                    </Section>
                                                </animated.div>
                                            ),
                                    )}
                                    {transitions2(
                                        (styles2, item2) =>
                                            item2 && (
                                                <animated.div style={styles2}>
                                                    <Section>
                                                        <SectionHeader>
                                                            <p>
                                                                This artwork is commissioned by The Greenverse 2021
                                                                <br />본 작품은 그린버스 2021의 커미션으로
                                                                제작되었습니다.
                                                            </p>
                                                            <div style={{ height: 32 }} />
                                                            <div className="grid">
                                                                <div className="item">
                                                                    <p>Supported by</p>
                                                                    <div className="image">
                                                                        <Image
                                                                            src={nabi}
                                                                            alt="art center nabi"
                                                                            layout="fixed"
                                                                            width={120}
                                                                            height={84}
                                                                        />
                                                                    </div>
                                                                    <div className="image">
                                                                        <Image
                                                                            src={wshed}
                                                                            alt="WATERSHED"
                                                                            layout="fixed"
                                                                            width={120}
                                                                            height={17}
                                                                        />
                                                                    </div>
                                                                    <div className="image">
                                                                        <Image
                                                                            src={sb}
                                                                            alt="SEOUL BANG & LEE STUDIO"
                                                                            layout="fixed"
                                                                            width={60}
                                                                            height={60}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <p>Funded by</p>
                                                                    <div className="image">
                                                                        <Image
                                                                            src={kf}
                                                                            alt="KOREA FOUNDATION 한국국제교류재단"
                                                                            layout="fixed"
                                                                            width={120}
                                                                            height={68}
                                                                        />
                                                                    </div>
                                                                    <div className="image">
                                                                        <Image
                                                                            src={brit}
                                                                            alt="British Council"
                                                                            layout="fixed"
                                                                            width={120}
                                                                            height={34}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SectionHeader>
                                                        <a
                                                            href="https://greenverse.art"
                                                            className="button"
                                                            style={{
                                                                padding: 24,
                                                                textDecoration: "none",
                                                                fontSize: 14,
                                                                lineHeight: 1.5,
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            ENTER « greenverse.art »
                                                        </a>
                                                    </Section>
                                                </animated.div>
                                            ),
                                    )}
                                    <Section style={{ borderRadius: "12px 12px 0 0" }}>
                                        <SectionHeader>
                                            <p>Credits</p>
                                            <p>
                                                작가
                                                <br />
                                                곽수아 이찬우
                                            </p>

                                            <p>
                                                웹 개발
                                                <br />
                                                신영민
                                            </p>
                                        </SectionHeader>
                                    </Section>
                                </Container>
                            </Wrapper>
                        </animated.div>
                    ),
            )}
        </>
    );
};

export default Info;
