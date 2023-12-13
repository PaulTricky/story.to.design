import { Button, Col, Row, Space, Tag } from "antd/lib";
import styles from "./styles.module.scss";
import ArrowUpRightIcon from "../Icon/ArrowUpRight";
import { useMemo } from "react";
const JobCard = ({ isMobile }) => {
  const tags = useMemo(() => {
    return isMobile
      ? ["Cyber Security", "Comp Functions"]
      : ["Cyber Security", "Safety", "z-call", "Comp Functions"];
  }, [isMobile]);
  return (
    <Row
      className={styles.card}
      style={{
        flexDirection: isMobile ? "column" : "row",
        // justifyContent: isMobile ? "center" : "space-between",
        // alignItems: isMobile ? "center" : "center",
        // flexWrap: 'wrap',
        rowGap: 16,
      }}
    >
      <Col
        xs={24}
        md={14}
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <span className={styles.title}>
          Data Protection Expert Needed for Z-Call Functions
        </span>

        <Space>
          {tags.map((tag) => (
            <Tag className={styles.tag} children={tag} />
          ))}
        </Space>
      </Col>
      <Col xs={24} md={10} style={{ display: "flex", gap: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <Space direction="vertical">
          <span className={styles.label}>Remote</span>
          <span className={styles.description}>Location</span>
        </Space>
        <Space direction="vertical">
          <span className={styles.label}>Intermedieate</span>
          <span className={styles.description}>Experience Level</span>
        </Space>
        <Tag className={styles.projectRate}> $$$ </Tag>

        {!isMobile && (
          <>
            <Space align='start'>
              View job
              <ArrowUpRightIcon />
            </Space>
          </>
        )}
      </Col>
      {isMobile && 
      <Col xs={24} md={12} style={{ display: "flex", gap: 10 }}>
        <Button className={styles.viewDetails}>View Details</Button>
      </Col>}
    </Row>
  );
};

export default JobCard;
