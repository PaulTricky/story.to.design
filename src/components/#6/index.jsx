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
const FooterComponent = () => {
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
    <div className={styles.card}>
      <Space
        style={{ padding: "64px 0", borderBottom: "1px solid #475466" }}
        size={64}
      >
        <Space direction="vertical" size={32} style={{ flex: '38%' }}>
          <Logo />
          <span className={styles.description}>
            Design amazing digital experiences that create more happy in the
            world.
          </span>
        </Space>
        <Space size={32}>
          {contents.map((el) => (
            <div className={styles.content}>
              <div className={styles.contentTitle}>{el.title}</div>
              <Space direction="vertical" size={12} style={{ marginTop: 16 }}>
                {el.labels.map((label) => (
                  <div className={styles.contentLabel}>
                    {label}
                  
                  {label === 'Solutions' && <Badge className={styles.new}>New</Badge>}
                  </div>
                ))}
              </Space>
            </div>
          ))}
        </Space>
      </Space>
      <Space style={{ marginTop: 32, justifyContent: "space-between" }}>
        <div className={styles.reserved}>
          © 2023 Blackbird LLC. All rights reserved.
        </div>
        <Space>{socials.map((icon) => icon)}</Space>
      </Space>
    </div>
  );
};

export default FooterComponent;
