import { Button, Space } from "antd/lib";
import Image from "next/image";

import BellIcon from "../Icon/Bell";
import GroupIcon from "../Icon/Groups";
import InboxIcon from "../Icon/Inbox";
import LogoIcon from "../Icon/Logo";
import ProjectsIcon from "../Icon/Projects";
import ReportIcon from "../Icon/Report";
import SettingIcon from "../Icon/Setting";
import TalentIcon from "../Icon/Talent";
import styles from "./styles.module.scss";
import PlayIcon from "../Icon/Play";
import avatar from "../../../public/avatar/banner-avatar.png";
import SearchIcon from "../Icon/Search";
import ArrowRightIcon from "../Icon/ArrowRight";
const BannerComponent = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: 1280,
        height: 495,
        background: "#630022",
        padding: "48px 59px",
        borderRadius: "24px",
        position: "relative",
        marginBottom: 36
      }}
    >
      <Space direction="vertical" size={24} style={{ maxWidth: 700 }}>
        <span className={styles.title}>
          Find the best Cyber Security Experts. Period....
        </span>
        <span className={styles.description}>
          Browse our directory of curated cyber security experts for
          security-minded teams. Explore top talent across a multitude of
          security specific skillsets.
        </span>
      </Space>
      <Space style={{ marginTop: 48 }}>
        <Button className={styles.button} style={{ color: "#344053" }}>
          {" "}
          <PlayIcon /> Watch Video{" "}
        </Button>
        <Button
          className={styles.button}
          style={{ background: "black", color: "white" }}
        >
          {" "}
          Get Started{" "}
        </Button>
      </Space>
      <div className={styles.search}>
        <div>
          <SearchIcon />
          Search for projects (i.e Cryptography)
        </div>
        <div className={styles.enter}>
            <ArrowRightIcon />
        </div>
      </div>

      <Image src={avatar} className={styles.bannerAvatar} />
    </Space>
  );
};

export default BannerComponent;
