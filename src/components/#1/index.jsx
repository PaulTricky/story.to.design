import { Space } from "antd/lib";
import Image from "next/image";
import avatar from "../../../public/avatar/avatar.png";
import BellIcon from "../Icon/Bell";
import GroupIcon from "../Icon/Groups";
import InboxIcon from "../Icon/Inbox";
import LogoIcon from "../Icon/Logo";
import ProjectsIcon from "../Icon/Projects";
import ReportIcon from "../Icon/Report";
import SettingIcon from "../Icon/Setting";
import TalentIcon from "../Icon/Talent";
import styles from "./styles.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import { useMemo } from "react";
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
        BlackBird
      </span>
    </Space>
  );
};

const leftNav = [
  {
    icon: <TalentIcon />,
    label: "Talent",
  },
  {
    icon: <ProjectsIcon />,
    label: "Projects",
  },
  {
    icon: <InboxIcon />,
    label: "Inbox",
  },
  {
    icon: <ReportIcon />,
    label: "Reports",
  },
];

const rightNav = [
  {
    icon: <GroupIcon />,
  },
  {
    icon: <BellIcon />,
  },
  {
    icon: <SettingIcon />,
  },
];

const mobileRightNav = [

  {
    icon: <BellIcon />,
  },
  {
    icon: <MenuIcon />,
  },
];

const NavbarComponent = ({ isMobile }) => {
  const renderNavItem = (items) =>
    items.map((el) => (
      <Space className={styles.nav}>
        {el.icon}
        {el?.label}
      </Space>
    ));

  const renderAvatar = () => (
    <Space className={styles.nav}>
      <div className={styles.avatar}>
        <Image src={avatar} />
      </div>
    </Space>
  );

  const layout = useMemo(() => {
    return !isMobile ? (
      <>
        {" "}
        <Space>
          <Logo />
          <Space style={{ marginLeft: "17px" }}>{renderNavItem(leftNav)}</Space>
        </Space>
        <Space style={{ justifyContent: "flex-end" }}>
          {renderNavItem(rightNav)}
          {renderAvatar()}
        </Space>
      </>
    ) : <>
      {renderAvatar()}
      <Logo />
      <Space style={{ justifyContent: "flex-end" }}>
          {renderNavItem(mobileRightNav)}
        </Space>
      </>;
  }, [isMobile])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
        borderBottom: "1px solid #EAECF0",
        width: '100%',
        background: 'white',
        zIndex: 100
      }}
    >
      {layout}
    </div>
  );
};

export default NavbarComponent;
