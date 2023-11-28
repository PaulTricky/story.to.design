import styles from "./styles.module.scss";
import avatar from "../../../public/avatar/profile-avatar.png";
import Image from "next/image";
import { Button, Dropdown, Menu, Space } from "antd/lib";
import SaveIcon from "../Icon/Save";
import ChatIcon from "../Icon/Chat";
import AddIcon from "../Icon/Add";
import DropdownIcon from "../Icon/Dropdown";
import VerticalDotIcon from "../Icon/VerticalDot";
import ShareIcon from "../Icon/Share";
const ProfileHeader = () => {
  return (
    <div className={styles.card}>
      <div className={styles.upper}>
        <Button  className={styles.share}><ShareIcon /> Share Profile</Button>
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
          <div className={styles.button}>
            <SaveIcon />
          </div>
          <div className={styles.button}>
            <ChatIcon />
          </div>
          <Button type='default' shape="round" style={{border: '2px solid #AF0000', fontSize: 14, fontWeight: 600, color: '#AF0000'}}> <AddIcon /> Connect</Button>
          <VerticalDotIcon  />
        </Space>
      </div>
    </div>
  );
};

export default ProfileHeader;
