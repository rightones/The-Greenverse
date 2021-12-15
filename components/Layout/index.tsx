import styled, { css } from "styled-components";
import React from "react";

const Container = styled.div<{ inner: boolean }>`
    display: grid;
    grid-template-columns: auto 24px;
    grid-template-areas: "children sidebar";
    width: 100%;
    margin: ${({ inner }) => (inner ? "0 0 64px 0" : "0 auto")};
    z-index: 0;

    ${({ inner }) =>
        inner &&
        css`
            grid-template-columns: 1fr minmax(auto, 480px) 1fr 24px;
            grid-template-areas: ". children . sidebar";
        `}
`;

const Children = styled.div<{ inner: boolean }>`
    grid-area: children;
    ${({ inner }) =>
        inner &&
        css`
            margin-right: -8px;
            margin-left: 24px;
        `}
`;

const Sidebar = styled.div<{ inner: boolean }>`
    grid-area: sidebar;
    ${({ inner }) =>
        inner &&
        css`
            margin-right: -24px;
            margin-left: 24px;
        `}
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
            <Sidebar inner={inner}>{sidebar}</Sidebar>
            <Children inner={inner}>{children}</Children>
        </Container>
    );
};

export default Layout;
