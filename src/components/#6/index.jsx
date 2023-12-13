import { Badge, Space } from "antd/lib";
import styles from "./styles.module.scss";
import LogoIcon from "../Icon/Logo";
import AngleListIcon from "../Icon/AngleList";

import TwitterIcon from "../Icon/Twitter";
import LinkedInIcon from "../Icon/LinkedIn";
import FacebookIcon from "../Icon/Facebook";
import DribbleIcon from "../Icon/Dribble";
import IconGithub from "../Icon/Github";
import GithubWhiteIcon from "../Icon/GithubWhite";
import DropdownIcon from "../Icon/Dropdown";
import { useEffect, useState } from "react";
const Logo = () => {
  return (
    <Space>
      <LogoIcon color={"white"} />
      <span
        style={{
          fontSize: "24px",
          fontWeight: 700,
          fontFamily: "Poppins",
          color: "white",
        }}
      >
        BlackBird
      </span>
    </Space>
  );
};

const FooterItem = ({ item, isMobile }) => {
  const [open, setOpen] = useState(false);
  return (
    <Space
      className={styles.content}
      direction={!isMobile ? "vertical" : "horizontal"}
    >
      <div className={styles.contentTitle}>{item.title}</div>
      <Space
        direction="vertical"
        className={styles.defaultItemFooter}
        size={12}
        style={{
          marginTop: !isMobile && 16,
          height: (open || !isMobile) ? 90 : 0,
        }}
      >
        {item.labels.map((label) => (
          <div className={styles.contentLabel}>
            {label}

            {label === "Solutions" && <Badge className={styles.new}>New</Badge>}
          </div>
        ))}
      </Space>

      {isMobile && (
        <div className={styles.footerDropdownMobile} onClick={() => setOpen(!open)}>
          <DropdownIcon />
        </div>
      )}
    </Space>
  );
};
const FooterComponent = ({ isMobile, isDesktop }) => {
  const contents = [
    {
      title: "Product",
      labels: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
      title: "Company",
      labels: ["About us", "Careers", "Press", "News"],
    },
    {
      title: "Resources",
      labels: ["Blog", "Newsletter", "Events", "Help Centre"],
    },
    {
      title: "Social",
      labels: ["Twitter", "LinkedIn", "Facebook", "GitHub"],
    },
    {
      title: "Legal",
      labels: ["Terms", "Privacy", "Cookies", "Licenses"],
    },
  ];
  const socials = [
    <TwitterIcon />,
    <LinkedInIcon />,
    <FacebookIcon />,
    <GithubWhiteIcon />,
    <AngleListIcon />,
    <DribbleIcon />,
  ];
  return (
    <div className={styles.card} >
      <Space
        style={{ padding: isMobile ? '32px 0' : "64px 0", borderBottom: "1px solid #475466" }}
        size={!isMobile ? 64 : 32}
        direction={isMobile ? "vertical" : "horizontal"}
      >
        <Space direction="vertical" size={32} style={{ flex: "38%" }}>
          <Logo />
          <span className={styles.description}>
            Design amazing digital experiences that create more happy in the
            world.
          </span>
        </Space>
        <Space
          direction={isMobile ? "vertical" : "horizontal"}
          size={!isMobile && 32}
          style={{ width: "100%" }}
        >
          {contents.map((el) => (
            <FooterItem item={el} isMobile={isMobile} />
          ))}
        </Space>
      </Space>
      <Space
        direction={isMobile ? "vertical" : "horizontal"}
        style={{ marginTop:  32, justifyContent: "space-between" }}
        size={isMobile && 16}
      >
        <div className={styles.reserved}>
          © 2023 Blackbird LLC. All rights reserved.
        </div>
        <Space>{socials.map((icon) => icon)}</Space>
      </Space>
    </div>
  );
};

export default FooterComponent;
