import React from "react";
import Image from "next/image";
import Layout from "../Layout";
import Sidebar from "../Sidebar";
import Logo from "../../public/logo.svg";
import SideNav from "../SideNav";

interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
    return (
        <Layout sidebar={<SideNav />}>
            <div style={{ marginBottom: 32 }} />
            <Image src={Logo} alt="Illogical Love" />
            <div style={{ marginBottom: 40 }} />
            {children}
            <div style={{ marginTop: 60 }} />
        </Layout>
    );
};

export default Header;
