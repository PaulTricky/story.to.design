import { Col, Row, Space, Tag } from "antd/lib";
import styles from "./styles.module.scss";
import StarIcon from "../Icon/Star";
import Image from "next/image";
import avatar from "../../../public/avatar/quote-avatar.png";
const QuoteSection = ({ isMobile, isDesktop }) => {
  const content = (
    <>
      <div className={styles.title}>
        BlackBird has saved us thousands of hours of work. We’re able to attract
        talent and close hires much faster.
      </div>

      <Space direction="vertical" style={{ marginTop: 32 }}>
        <span className={styles.label}>— Renee Wells</span>
        <span className={styles.description}>Hiring Manager, Quotient</span>
      </Space>
      <Space style={{ marginTop: 32 }}>
        <div className={styles.blackDot} />
        <div className={isMobile ? styles.whiteDot : styles.greyDot} />
        <div className={isMobile ? styles.whiteDot : styles.greyDot} />
      </Space>
    </>
  );
  return (
    <div className={styles.card}>
      {!isDesktop ? (
        <>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              padding: "1rem",
              color: "white",
              zIndex: 3,
            }}
          >
            {content}
          </div>
          <Image
            src={avatar}
            style={{ width: "100%", height: "100%", opacity: 0.5 }}
          />
        </>
      ) : (
        <Row>
          <Col flex="1" className={styles.content}>
            <Space>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Space>
            {content}
          </Col>
          <Col flex="480px">
            <Image src={avatar} style={{ width: "100%", height: "100%" }} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default QuoteSection;
