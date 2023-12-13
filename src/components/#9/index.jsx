import { Button, Dropdown, Space } from "antd/lib";
import Image from "next/image";
import avatar from "../../../public/avatar/profile-avatar.png";
import AddIcon from "../Icon/Add";
import ChatIcon from "../Icon/Chat";
import SaveIcon from "../Icon/Save";
import ShareIcon from "../Icon/Share";
import VerticalDotIcon from "../Icon/VerticalDot";
import styles from "./styles.module.scss";
const ProfileHeader = ({ isMobile, isDesktop }) => {
  return (
    <div className={styles.card}>
      <div className={styles.upper}>
        <Button className={styles.share}>
          <ShareIcon /> Share Profile
        </Button>
      </div>
      <div className={styles.main}>
        <Space size={32}>
          <Image className={styles.avatar} src={avatar} />
          <Space direction="vertical">
            <Space>
              <span className={styles.name}>Luciana O.</span>
              <div className={styles.active}>
                <div className={styles.dot} />
                Active this week
              </div>
            </Space>
            <Space>
              <span className={styles.info}>
                1st° • Chicago, United States • 11:19 am local time
              </span>
            </Space>
          </Space>
        </Space>
        <Space className={styles.actions}>
          {isDesktop && (
            <>
              <div className={styles.button}>
                <SaveIcon />
              </div>
              <div className={styles.button}>
                <ChatIcon />
              </div>
              <Button
                type="default"
                shape="round"
                style={{
                  border: "2px solid #AF0000",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#AF0000",
                }}
              >
                {" "}
                <AddIcon /> Connect
              </Button>
            </>
          )}
          <Dropdown placement="bottomLeft" arrow={{ pointAtCenter: true }} menu={{items: [
            {
              label: 'Save',
              key: 'save'
            },
            {
              label: 'Connect',
              key: 'connect'
            },
            {
              label: 'Chat',
              key: 'chat'
            },
          ]}}>
            <Button type='ghost'>
            <VerticalDotIcon />
            </Button>
          
          </Dropdown>
          
        </Space>
      </div>
    </div>
  );
};

export default ProfileHeader;
