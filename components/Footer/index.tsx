import styled from "styled-components";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import logo from "../../public/image/logo.png";
import { InfoStore } from "../Info";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 40px 24px 48px 40px;
    align-items: center;
    background-color: ${({ theme }) => theme.color.text};
    text-align: center;
    color: white;

    span {
        font-family: "Documan", "IBM Plex Sans KR", -apple-system, BlinkMacSystemFont, system-ui, Roboto,
            "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
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
        <FooterContainer>
            <span>This artwork is commissioned by The Greenverse 2021</span>
            <span>본 작품은 그린버스 2021의 커미션으로 제작되었습니다.</span>
            <div style={{ height: 32 }} />
            <span>SOOAH KWAK & CHANU LEE</span>
            <span>곽수아 & 이찬우</span>
            <div style={{ height: 32 }} />
            <button onClick={() => setState(true)}>자세히 보기</button>
            <div style={{ height: 32 }} />
            <Image src={logo} />
        </FooterContainer>
    );
};

export default Footer;
