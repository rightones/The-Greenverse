import styled from "styled-components";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import logo from "../../public/image/logo.png";
import { InfoStore } from "../Info";

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.text};
`;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 40px 24px 48px 24px;
    align-items: center;
    text-align: center;
    color: white;
    max-width: 480px;
    margin: 0 auto;

    span {
        font-family: "Documan", "IBM Plex Sans KR", -apple-system, BlinkMacSystemFont, system-ui, Roboto,
            "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-transform: uppercase;
    }

    button {
        width: 152px;
        background-color: white;
        padding: 3px 8px 3px 9px;
        border-radius: 16px;
        height: 24px;
        cursor: pointer;
    }
`;

const Footer = () => {
    const setState = useSetRecoilState(InfoStore);

    return (
        <Wrapper>
            <FooterContainer>
                <span>
                    This artwork is commissioned by
                    <br />
                    The Greenverse 2021
                </span>
                <span>본 작품은 그린버스 2021의 커미션으로 제작되었습니다.</span>
                <div style={{ height: 32 }} />
                <span>SOOAH KWAK & CHANU LEE</span>
                <span>곽수아 & 이찬우</span>
                <div style={{ height: 32 }} />
                <button onClick={() => setState(true)}>자세히 보기</button>
                <div style={{ height: 32 }} />
                <Image src={logo} />
            </FooterContainer>
        </Wrapper>
    );
};

export default Footer;
