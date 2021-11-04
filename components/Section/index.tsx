import styled from "styled-components";
import React from "react";
import Layout from "../Layout";

const SectionContainer = styled.section``;

const SidebarItem = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    width: 16px;
    padding: 10px 0;
    border-top: 2px solid white;
    margin-left: auto;

    & > span {
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: white;
        margin-left: -1px;
        line-height: 12px;
        z-index: 0;
        font-family: "Documan", sans-serif;
    }
`;

interface SectionProps {
    children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
    return (
        <Layout
            sidebar={
                <SidebarItem>
                    <span>0m</span>
                </SidebarItem>
            }
            inner
        >
            <SectionContainer>{children}</SectionContainer>
        </Layout>
    );
};

export default Section;
