import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const SidebarContainer = styled.nav`
    display: flex;
    flex-direction: column;
`;

const SidebarItem = styled.a`
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
`;

const SideNav = () => {
    const router = useRouter();
    return (
        <SidebarContainer>
            <Link href="/" passHref>
                <SidebarItem className="button">
                    <span>{router.locale === "ko" ? "정보" : "INFO"}</span>
                </SidebarItem>
            </Link>
        </SidebarContainer>
    );
};

export default SideNav;
