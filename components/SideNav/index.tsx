import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { InfoStore } from "../Info";

const SidebarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const SidebarItem = styled.div`
    border-radius: 16px 0 0 16px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    text-decoration: none;
    color: white;
    padding: 16px 0;
    align-self: stretch;
    cursor: pointer;
`;

const AnchorButton = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    text-decoration: none;
    color: white;
    padding: 2px 0;
    cursor: pointer;
`;

const SideNav = () => {
    const router = useRouter();
    const setState = useSetRecoilState(InfoStore);
    const handleScroll = (el: string) => {
        const element = document.getElementById(el);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <SidebarContainer>
            <SidebarItem className="button" role="button" onClick={() => setState(true)}>
                <span>{router.locale === "ko" ? "정보" : "INFO"}</span>
            </SidebarItem>
            <div style={{ height: 16 }} />
            <AnchorButton className="button" role="button" onClick={() => handleScroll("5m")}>
                <span>5m</span>
            </AnchorButton>
            ·
            <AnchorButton className="button" role="button" onClick={() => handleScroll("15m")}>
                <span>15m</span>
            </AnchorButton>
            ·
            <AnchorButton className="button" role="button" onClick={() => handleScroll("25m")}>
                <span>25m</span>
            </AnchorButton>
            ·
            <AnchorButton className="button" role="button" onClick={() => handleScroll("35m")}>
                <span>35m</span>
            </AnchorButton>
        </SidebarContainer>
    );
};

export default SideNav;
