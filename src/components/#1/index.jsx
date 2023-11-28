import { Space } from "antd/lib";
import Image from "next/image";
import avatar from '../../../public/avatar/avatar.png';
import BellIcon from "../Icon/Bell";
import GroupIcon from "../Icon/Groups";
import InboxIcon from "../Icon/Inbox";
import LogoIcon from "../Icon/Logo";
import ProjectsIcon from "../Icon/Projects";
import ReportIcon from "../Icon/Report";
import SettingIcon from "../Icon/Setting";
import TalentIcon from "../Icon/Talent";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <Space>
      <LogoIcon />
      <span
        style={{
          fontSize: "24px",
          fontWeight: 700,
          fontFamily: "Poppins",
          color: "black",
        }}
      >
        Black Bird
      </span>
    </Space>
  );
};

const NavMenu = ({ items }) => {
  return (
    <div style={{ height: "100%", width: "100px", color: "red" }}>
      {items.map((item) => {
        <div>
          {" "}
          hi {item.icon} {item.label}{" "}
        </div>;
      })}
    </div>
  );
};

const NavbarComponent = () => {
  const leftNav = [
    {
      icon: <TalentIcon />,
      label: "Talent",
    },
    {
      icon: <TalentIcon />,
      label: "Projects",
    },
    {
      icon: <TalentIcon />,
      label: "Inbox",
    },
    {
      icon: <TalentIcon />,
      label: "Reports",
    },
  ];

  const rightNav = [
    {
      icon: <GroupIcon />,
      label: "",
    },
    {
      icon: <BellIcon />,
      label: "",
    },
    {
      icon: <SettingIcon />,
      label: "",
    },
  ];
  return (
    <div
      style={{
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
      }}
    >
      <Space>
        <Logo />

        <Space style={{ marginLeft: "17px" }}>
          <Space className={styles.nav}>
            <TalentIcon />
            Talent
          </Space>
          <Space className={styles.nav}>
            <ProjectsIcon />
            Projects
          </Space>
          <Space className={styles.nav}>
            <InboxIcon />
            Inbox
          </Space>
          <Space className={styles.nav}>
            <ReportIcon />
            Reports
          </Space>
        </Space>
      </Space>
      <Space style={{justifyContent: 'flex-end'}}>
        <Space className={styles.nav}>
          <GroupIcon />
        </Space>
        <Space className={styles.nav}>
          <BellIcon />
        </Space>
        <Space className={styles.nav}>
          <SettingIcon />
        </Space>
        <Space className={styles.nav}>
          <div className={styles.avatar} >
            <Image src={avatar} />
          </div>
        </Space>
      </Space>
    </div>
  );
};

export default NavbarComponent;
