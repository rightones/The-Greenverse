import styled from "styled-components";
import React from "react";

const Container = styled.div<{ inner: boolean }>`
    display: grid;
    grid-template-columns: auto 24px;
    grid-template-areas: "children sidebar";
    width: ${({ inner }) => (inner ? "auto" : "100%")};
    margin: ${({ inner }) => (inner ? "0 -40px 48px 0" : "0 auto")};
    z-index: 0;
`;

const Children = styled.div<{ inner: boolean }>`
    padding: ${({ inner }) => (inner ? "0 16px 0 0" : "0 16px 0 24px")};
    grid-area: children;
`;

const Sidebar = styled.div`
    grid-area: sidebar;
`;

interface LayoutProps {
    sidebar: React.ReactNode;
    children: React.ReactNode;
    inner?: boolean;
    id?: string;
}

const Layout = ({ sidebar, children, inner = false, id }: LayoutProps) => {
    return (
        <Container inner={inner} id={id}>
            <Sidebar>{sidebar}</Sidebar>
            <Children inner={inner}>{children}</Children>
        </Container>
    );
};

export default Layout;
