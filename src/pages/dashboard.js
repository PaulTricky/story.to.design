import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.scss";
import NavbarComponent from "@/components/#1";
import BannerComponent from "@/components/#2";
import ProjectCard from "@/components/#3";
import { Space } from "antd/lib";
import JobCard from "@/components/#4";
import QuoteSection from "@/components/#5";
import FooterComponent from "@/components/#6";
import ProfileHeader from "@/components/#9";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsDesktop( width > 1000);
    };
    resize()
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Space
      direction="vertical"
      size={16}
      style={{
        background: "white",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        
      }}
    >
      <NavbarComponent isMobile={isMobile} />
      <Space
        direction="vertical"
        size={16}
        style={{
          width: "100%",
          padding: "70px 15px 30px",
        }}
      >
        <BannerComponent isMobile={isMobile} isDesktop={isDesktop} />
        <ProjectCard isMobile={isMobile} />
        <JobCard isMobile={isMobile} />
        <QuoteSection isMobile={isMobile} isDesktop={isDesktop} />
        <ProfileHeader isMobile={isMobile} isDesktop={isDesktop} />
      </Space>
      <FooterComponent isMobile={isMobile} isDesktop={isDesktop} />

    </Space>
  );
};
Dashboard.getLayout = (page) => page;
export default Dashboard;
