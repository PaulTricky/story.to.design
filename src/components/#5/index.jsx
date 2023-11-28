import { Space, Tag } from "antd/lib";
import styles from "./styles.module.scss";
import StarIcon from "../Icon/Star";
import Image from "next/image";
import avatar from '../../../public/avatar/quote-avatar.png'
const QuoteSection = () => {
    return <div className={styles.card}>
        <Space direction="vertical" className={styles.content}>
            <Space>
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </Space>
            <div className={styles.title}>
            BlackBird has saved us thousands of hours of work. We’re able to attract talent and close hires much faster.
            </div>

            <Space direction="vertical" style={{marginTop: 32}}>
                <span className={styles.label}>— Renee Wells</span>
                <span className={styles.description}>Hiring Manager, Quotient</span>
            </Space>
            <Space style={{marginTop: 32}}>
                <div className={styles.blackDot} />
                <div className={styles.greyDot} />
                <div className={styles.greyDot} />
            </Space>
            
        </Space>
        <Image src={avatar} />
    </div>
}

export default QuoteSection