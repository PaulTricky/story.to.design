import { Button, Input, Space } from "antd/lib";
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

const EnterButton = ({ size }) => {
  return (
    <div className={styles.enter} style={{ width: size, height: size }}>
      <ArrowRightIcon />
    </div>
  );
};
const BannerComponent = ({ isMobile, isDesktop }) => {
  return (
    <>
      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          background: "#630022",
          borderRadius: "24px",
          position: "relative",
          marginBottom: 36,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Space
          style={{
            padding: "3rem 3.6875rem",
            paddingRight: isMobile ? '3.6875rem' : "0px",
            flex: "auto",
          }}
          direction="vertical"
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
          <Space style={{ marginTop: isMobile ? 10 : 48 }}>
            <Button
              className={styles.button}
              style={{ color: "#344053", height: isMobile ? "auto" : 60 }}
            >
              {" "}
              <PlayIcon /> Watch Video{" "}
            </Button>
            <Button
              className={styles.button}
              style={{
                background: "black",
                color: "white",
                height: isMobile ? "auto" : 60,
              }}
            >
              {" "}
              Get Started{" "}
            </Button>
          </Space>

          <Input
            className={styles.inputSearch}
            prefix={<SearchIcon />}
            placeholder="Search for projects (i.e Cryptography)"
            suffix={<EnterButton size={isMobile ? 30 : 54} />}
          />
        </Space>
        {isDesktop &&
        <div className={styles.bannerAvatar}>
           <Image style={{ height: "100%" }} src={avatar} />
        </div>
        }
      </div>
    </>
  );
};

export default BannerComponent;
