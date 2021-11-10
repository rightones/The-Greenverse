import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../Layout";
import Sidebar from "../Sidebar";
import Logo from "../../public/logo.svg";
import SideNav from "../SideNav";

const LocaleButton = styled.a`
    display: flex;
    width: fit-content;
    align-items: center;
    height: 24px;
    padding: 0 12px;
    border-radius: 16px;
    background-color: white;
    text-decoration: none;
    color: black;

    .active {
        color: ${({ theme }) => theme.color.blue};
        text-decoration: underline;
    }
`;

interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
    const router = useRouter();
    return (
        <Layout sidebar={<SideNav />} inner>
            <div style={{ marginBottom: 48 }} />
            <Image src={Logo} alt="Illogical Love" />
            <div style={{ marginBottom: 24 }} />
            <Link href={router.asPath} locale={router.locale === "ko" ? "en" : "ko"} passHref>
                <LocaleButton className="button">
                    <span className={`${router.locale === "ko" && "active"}`}>KO</span>&nbsp;·&nbsp;
                    <span className={`${router.locale === "en" && "active"}`}>EN</span>
                </LocaleButton>
            </Link>
            <div style={{ marginTop: 48 }} />
            {children}
        </Layout>
    );
};

export default Header;
