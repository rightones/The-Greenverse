import styled from "styled-components";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import logo from "../../public/image/logo.png";
import { InfoStore } from "../Info";

const Wrapper = styled.div`
    background-color: white;
`;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 40px 24px;
    color: white;
    max-width: 480px;
    margin: 0 auto;

    a {
        color: ${({ theme }) => theme.color.text};
        font-size: 14px;
        line-height: 1.5;
        text-decoration: none;
    }
`;

const FootNote = () => {
    const setState = useSetRecoilState(InfoStore);

    return (
        <Wrapper>
            <FooterContainer>
                <h1>
                    <span className="subtitle">References</span>
                </h1>
                <a href="https://news.microsoft.com/innovation-stories/project-natick-underwater-datacenter/">
                    ↗ Microsoft finds underwater datacenters are reliable, practical and use energy sustainably,
                    Microsoft Innovation Stories
                </a>
                <br />
                <a href="https://www.theverge.com/2020/9/14/21436746/microsoft-project-natick-data-center-server-underwater-cooling-reliability">
                    ↗ Microsoft’s underwater server experiment resurfaces after two years, The Verge
                </a>
                <br />
                <a href="https://www.theverge.com/2018/6/6/17433206/microsoft-underwater-data-center-project-natick">
                    ↗ Microsoft sinks a data center off the Scottish coast, The Verge
                </a>
                <br />
                <a href="https://azure.microsoft.com/en-us/global-infrastructure/sustainability/">
                    ↗ Azure sustainability, Microsoft Azure
                </a>
                <br />
                <a href="https://spectrum.ieee.org/want-an-energyefficient-data-center-build-it-underwater">
                    ↗ WANT AN ENERGY-EFFICIENT DATA CENTER? BUILD IT UNDERWATER, IEEE Spectrum
                </a>
                <br />
                <a href="https://www.verdict.co.uk/microsoft-underwater-data-centres/">
                    ↗ Environmental impact of Microsoft underwater data centres must be monitored, experts warn, Verdict
                </a>
                <br />
                <a href="https://www.theguardian.com/commentisfree/2018/jul/17/internet-climate-carbon-footprint-data-centres">
                    ↗ Our phones and gadgets are now endangering the planet, The Guardian
                </a>
            </FooterContainer>
        </Wrapper>
    );
};

export default FootNote;
