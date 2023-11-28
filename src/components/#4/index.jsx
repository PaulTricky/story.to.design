import { Space, Tag } from "antd/lib";
import styles from "./styles.module.scss";
import ArrowUpRightIcon from "../Icon/ArrowUpRight";
const JobCard = () => {
  return (
    <div className={styles.card}>
      <Space direction="vertical">
        <span className={styles.title}>
          Data Protection Expert Needed for Z-Call Functions
        </span>

        <Space>
          <Tag className={styles.tag}>Cyber Security</Tag>
          <Tag className={styles.tag}>Safety</Tag>
          <Tag className={styles.tag}>z-call</Tag>
          <Tag className={styles.tag}>Comp Functions</Tag>
        </Space>
      </Space>
      <Space style={{justifyContent: 'space-between', gap: 24}}>
        <Space direction="vertical">
          <span className={styles.label}>Remote</span>
          <span className={styles.description}>Location</span>
        </Space>
        <Space direction="vertical">
          <span className={styles.label}>Intermedieate</span>
          <span className={styles.description}>Experience Level</span>
        </Space>
        <Tag className={styles.projectRate}> $$$ </Tag>
        <Space>
          View job
          <ArrowUpRightIcon />
        </Space>
      </Space>
    </div>
  );
};

export default JobCard;
