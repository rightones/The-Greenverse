import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const SidebarContainer = styled.nav`
    display: flex;
    flex-direction: column;
`;

const SidebarItem = styled.a<{ active: boolean }>`
    border-radius: 16px 0 0 16px;
    background: ${({ active }) => (active ? "transparent" : "white")};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 143px;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    text-decoration: none;

    & > span {
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: ${({ active, theme }) => (active ? theme.color.blue : "black")};
        line-height: 16px;
        font-family: "Documan", sans-serif;
    }
`;

const SideNav = () => {
    const router = useRouter();
    return (
        <SidebarContainer>
            <Link href="/" passHref>
                <SidebarItem active={router.asPath === "/"}>
                    <span>56m · RESEARCH</span>
                </SidebarItem>
            </Link>
            <Link href="/info" passHref>
                <SidebarItem active={router.asPath === "/info"}>
                    <span>56m · INFO</span>
                </SidebarItem>
            </Link>
            <Link href={router.asPath} passHref locale={router.locale === "ko" ? "en" : "ko"}>
                <SidebarItem active={false}>
                    <span>{router.locale === "ko" ? "ENGLISH" : "한국어"}</span>
                </SidebarItem>
            </Link>
        </SidebarContainer>
    );
};

export default SideNav;
