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

export default function Home() {
  return (
    <Space
      direction="vertical"
      size={16}
      style={{
        background: "white",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        paddingBottom: 30,
      }}
    >
      <NavbarComponent />
      <BannerComponent />
      <ProjectCard />
      <JobCard />
      <QuoteSection />
      <FooterComponent />
    </Space>
  );
}
