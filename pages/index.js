import Head from "next/head";
import Image from "next/image";
import { Button, Typography, Row, Steps } from "antd";
import { useState } from "react";

const { Title } = Typography;
const { Step } = Steps;

import styles from "../styles/Home.module.css";

export default function Home() {
    const [currentprogress, setcurrentprogress] = useState(0);
    if (currentprogress === 0) {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Christmas Lucky Draw</title>
                    <meta name="description" content="Christmas Lucky Draw" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main} style={{ background: "#6de480" }}>
                    <div className="App">
                        <Row justify="center" style={{ marginBottom: 20 }}>
                            <Image
                                src="/christmastree.png"
                                alt="AMSL Corp"
                                width={180}
                                height={260}
                            />
                        </Row>
                        <Title level={1} style={{ color: "white" }}>
                            Christmas Lucky Draw
                        </Title>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Steps
                                current={currentprogress}
                                size="small"
                                style={{ marginTop: 30 }}
                            >
                                <Step title="Welcome" />
                                <Step title="Draw" />
                                <Step title="Results" />
                            </Steps>
                        </div>
                        <Title
                            level={5}
                            style={{
                                color: "white",
                                paddingTop: 15,
                                paddingBottom: 20,
                                width: "90%",
                                margin: "auto",
                                textAlign: "left",
                            }}
                        >
                            Play again and again until everyone get a present.
                        </Title>
                        <Button
                            shape="round"
                            size="large"
                            style={{
                                marginLeft: 8,
                                background: "white",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: 12,
                            }}
                            onClick={() =>
                                setcurrentprogress(currentprogress + 1)
                            }
                        >
                            Getting Started
                        </Button>
                    </div>
                </main>

                {/* <footer className={styles.footer}>
                <a
                    href="https://github.com/AlfredChow2338"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/amsl.jpg"
                            alt="AMSL Corp"
                            width={48}
                            height={48}
                        />
                    </span>
                </a>
            </footer> */}
            </div>
        );
    } else if (currentprogress === 1) {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Christmas Lucky Draw</title>
                    <meta name="description" content="Christmas Lucky Draw" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <div className="App">
                        <Row justify="center" style={{ marginBottom: 40 }}>
                            <Image
                                src="/luckydraw.gif"
                                alt="AMSL Corp"
                                width={260}
                                height={180}
                            />
                        </Row>
                        <Steps current={currentprogress} size="small">
                            <Step title="Welcome" />
                            <Step title="Draw" />
                            <Step title="Results" />
                        </Steps>
                        <Button
                            shape="round"
                            size="large"
                            style={{
                                width: "90%",
                                marginTop: 20,
                                background: "#663399",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 12,
                            }}
                            onClick={() =>
                                setcurrentprogress(currentprogress + 1)
                            }
                        >
                            Draw
                        </Button>
                        <Button
                            shape="round"
                            size="large"
                            style={{
                                width: "90%",
                                marginTop: 20,
                                background: "white",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: 12,
                            }}
                            onClick={() =>
                                setcurrentprogress(currentprogress - 1)
                            }
                        >
                            Back
                        </Button>
                    </div>
                </main>
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Christmas Lucky Draw</title>
                    <meta name="description" content="Christmas Lucky Draw" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main} style={{ background: "#ffffff" }}>
                    <div className="App">
                        <Row justify="center" style={{ marginBottom: 10 }}>
                            <Image
                                src="/present.png"
                                alt="AMSL Corp"
                                width={100}
                                height={100}
                            />
                        </Row>
                        <Title
                            level={3}
                            style={{
                                color: "black",
                                marginTop: 40,
                            }}
                        >
                            Results: <br />
                        </Title>
                        <Title
                            level={4}
                            style={{ color: "#333333", marginBottom: 20 }}
                        >
                            Congrats Erik for winning a Nike Sandal!
                        </Title>
                        <Steps current={currentprogress} size="small">
                            <Step title="Welcome" />
                            <Step title="Draw" />
                            <Step title="Results" />
                        </Steps>

                        <Button
                            shape="round"
                            size="large"
                            style={{
                                width: "90%",
                                marginTop: 20,
                                background: "#663399",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 12,
                            }}
                            onClick={() =>
                                setcurrentprogress(currentprogress - 1)
                            }
                        >
                            Draw Again
                        </Button>
                    </div>
                </main>
            </div>
        );
    }
}
