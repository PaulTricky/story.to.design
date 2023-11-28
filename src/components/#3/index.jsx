import { Typography } from '@/components/Typography';
import ExpandText from '@/components/Typography/ExpandText';
import { Button, Col, Row, Space, Tag } from 'antd/lib';
import avatar from '../../../public/avatar/Vector.png';
import ChatIcon from '../Icon/Chat';
import SaveIcon from '../Icon/Save';
import styles from './FeaturedProject.module.scss';
import Image from "next/image";
const ProjectCard = () => {
    return <div className={styles.card}>
      <Row>
        <Col flex={'1'} className="flex gap-8">
        <Image src={avatar} className={styles.bannerAvatar} />

          <div className="flex-column gap-8">
            <span className={styles.title}>Conset Consulting Firm</span>
          
            <Tag
              className={styles.matchPercent}
              children={`40% match`}
            />
          </div>
        </Col>
        <Col flex={'67px'}>
          <Tag className={styles.projectRate}> $$$ </Tag>
        </Col>
      </Row>
      <Row className="mt-1-5rem">
        <Typography  className={styles.projectTitle} children={'Data Protection Expert Needed for Z-Call Functions'} />
      </Row>

      <Row className="mt-1-5rem">
        <Col xs={6} className="flex-column">
          <Typography
            color="#344053"
            className="fs-16 fw-500"
            children={'$1500'}
          />
          <Typography color="#667084" className="fs-14 fw-400" children={'Fixed Price'} />
        </Col>
        <Col xs={6} className="flex-column">
          <Typography
            color="#344053"
            className="fs-16 fw-500"
            children={'Intermedieate'}
          />
          <Typography color="#667084" className="fs-14 fw-400" children={'Experience Level'} />
        </Col>
      </Row>
      <Space style={{marginTop: 24}}>
      <Tag className={styles.tag}>
      Cyber Security
      </Tag>
      <Tag className={styles.tag}>
      Safety
      </Tag>
      <Tag className={styles.tag}>
      z-call
      </Tag>
      <Tag className={styles.tag}>
      Comp Functions
      </Tag>
      <Tag className={styles.tag}>
      +5
      </Tag>
      </Space>


      <Row className="flex-between mt-1-5rem">
        <Col>
          <Button  className={styles.viewDetails}>
            View Details
          </Button>
        </Col>
        <Col className="flex gap-8">
          <div className={styles.button}>
          <SaveIcon  />
          </div>
          <div className={styles.button}>
          <ChatIcon />
          </div>
         
        </Col>
      </Row>

    </div>
}

export default ProjectCard