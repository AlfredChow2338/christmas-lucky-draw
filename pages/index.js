import Head from "next/head";
import { Button, Typography, Row, Steps, Select } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;
const { Step } = Steps;
const { Option } = Select;

import styles from "../styles/Home.module.css";

const userlist = [
    {
        id: "shirley wong",
        name: "AMSL - Shirley Wong",
        group: 2,
    },
    {
        id: "anson",
        name: "EC - Anson",
        group: 1,
    },
    {
        id: "bill",
        name: "EC - Bill",
        group: 1,
    },
    {
        id: "elida",
        name: "EC - Elida",
        group: 1,
    },
    {
        id: "eric shiu",
        name: "EC - Eric",
        group: 1,
    },
    {
        id: "matthew",
        name: "EC - Matthew",
        group: 1,
    },
    {
        id: "nancy",
        name: "EC - Nancy",
        group: 1,
    },
    {
        id: "roger",
        name: "EC - Roger",
        group: 1,
    },

    {
        id: "ritchie",
        name: "Dimdon - Ritchie",
        group: 1,
    },
    {
        id: "alex",
        name: "StreetSmart - Alex",
        group: 1,
    },
    {
        id: "alfred",
        name: "StreetSmart - Alfred",
        group: 2,
    },
    {
        id: "bret",
        name: "StreetSmart - Bret",
        group: 2,
    },
    {
        id: "bruce",
        name: "StreetSmart - Bruce",
        group: 2,
    },
    {
        id: "crystal",
        name: "StreetSmart - Crystal",
        group: 2,
    },
    {
        id: "erik she",
        name: "StreetSmart - Erik",
        group: 2,
    },
    {
        id: "franky",
        name: "StreetSmart - Franky",
        group: 2,
    },
    {
        id: "karida",
        name: "StreetSmart - Karida",
        group: 2,
    },
    {
        id: "larry",
        name: "StreetSmart - Larry",
        group: 1,
    },
    {
        id: "parky",
        name: "StreetSmart - Parky",
        group: 2,
    },
    {
        id: "shirley ip",
        name: "StreetSmart - Shirley Ip",
        group: 2,
    },
    {
        id: "tonio",
        name: "StreetSmart - Tonio",
        group: 2,
    },
];

const presentList = [
    {
        id: 1,
        name: "和暖羊毛被-雙人",
        pgroup: 2,
    },
    {
        id: 2,
        name: "OT290 4D肩頸按摩披肩 紅外發熱 溫感揉捏 頸部按摩 腰部按摩 腿部按摩 全身多部位可用 多功能按摩帶",
        pgroup: 2,
    },
    {
        id: 3,
        name: "【香港行貨】Miffy R007 暖手寶陶瓷暖風機",
        pgroup: 1,
    },
    {
        id: 4,
        name: "便攜式防水藍牙喇叭-『灰色』Clip Series_IPX7防水喇叭+鋁合金背包扣",
        pgroup: 1,
    },
    {
        id: 5,
        name: "日本TSK 無葉款桌面迷你速熱便攜式暖風機L-30",
        pgroup: 1,
    },
    {
        id: 6,
        name: "水溶性香薰連香薰機 - 薰衣草(15毫升)+甜橙(15毫升)",
        pgroup: 1,
    },
    {
        id: 7,
        name: "DELONGHI KG200 咖啡研磨器 電動咖啡磨豆機 咖啡研磨器",
        pgroup: 2,
    },
    {
        id: 8,
        name: "(白色) NM4 3合1智能頸椎按摩儀 遙控 語音 發熱 EMS NECK MASSAGER 低頭族必備 頸部按摩 xp-pk718-wh/nm4 (香港原裝行貨 半年保養)",
        pgroup: 1,
    },
    {
        id: 9,
        name: "暖手充電寶 9000 mAh (綠色) – GPW9000G",
        pgroup: 1,
    },
    {
        id: 10,
        name: "“Snowman”香薰加濕機連星空投射燈(N52)",
        pgroup: 1,
    },
    {
        id: 11,
        name: "全貼合人體工學保健坐墊 保護脊椎 承托墊 美臀塑腿 痔瘡椅墊 腰痛救星",
        pgroup: 1,
    },
    {
        id: 12,
        name: "(白色) NM4 3合1智能頸椎按摩儀 遙控 語音 發熱 EMS NECK MASSAGER 低頭族必備 頸部按摩 xp-pk718-wh/nm4 (香港原裝行貨 半年保養)",
        pgroup: 1,
    },
    {
        id: 13,
        name: "飛利浦技術直髮器",
        pgroup: 1,
    },
    {
        id: 14,
        name: "Starbucks Xmas Coupon",
        pgroup: 2,
    },
    {
        id: 15,
        name: "Starbucks Xmas Coupon",
        pgroup: 2,
    },
    {
        id: 16,
        name: "Nu Gundam MG Version Ka",
        pgroup: 2,
    },
    {
        id: 17,
        name: "型棍 Nike Sandal",
        pgroup: 2,
    },
    {
        id: 18,
        name: "DOMA Keep warm Cup Set",
        pgroup: 2,
    },
    {
        id: 19,
        name: "伊瑪0.6升摺疊電熱水瓶",
        pgroup: 2,
    },
    {
        id: 20,
        name: "北海道元貝",
        pgroup: 2,
    },
    {
        id: 21,
        name: "​傳統第一代金錢款塑膠豬仔錢罌",
        pgroup: 2,
    },
];

export default function Home() {
    const [currentprogress, setcurrentprogress] = useState(0);
    const [userid, setuserid] = useState("");
    const [usergroupid, setusergroupid] = useState(0);
    const [presentname, setpresentname] = useState("");
    // const [selecteddata, setselecteddata] = useState([]);
    const [notselecteddata, setnotselecteddata] = useState([]);
    const [presentdata, setpresentdata] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem("not_selected")) {
            localStorage.setItem("not_selected", JSON.stringify(userlist));
        }
        if (!localStorage.getItem("present")) {
            localStorage.setItem("present", JSON.stringify(presentList));
        }
        setnotselecteddata(JSON.parse(localStorage.getItem("not_selected")));
    }, []);
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max) + 1;
    };
    const handleChangeDropDown = (value) => {
        setuserid(value);
        const user = notselecteddata.find((item) => item.id === value);
        setusergroupid(user.group);
    };
    const handleClickBackToDraw = () => {
        setcurrentprogress(currentprogress - 1);
        setnotselecteddata(JSON.parse(localStorage.getItem("not_selected")));
        setuserid("");
        setusergroupid("");
    };
    const handleSubmitDraw = () => {
        if (userid.length === 0) return;
        const notselecteddatatemp = JSON.parse(
            localStorage.getItem("not_selected")
        );
        setpresentdata(JSON.parse(localStorage.getItem("present")));
        const presentdatatemp = JSON.parse(localStorage.getItem("present"));
        const fnotselectedStorage = notselecteddatatemp.filter(
            (item) => item.id !== userid
        );
        setnotselecteddata(fnotselectedStorage);
        localStorage.setItem(
            "not_selected",
            JSON.stringify(fnotselectedStorage)
        );

        let randomNum = getRandomInt(21);
        const filpresentdata = presentdatatemp.filter(
            (item) => item.pgroup === usergroupid
        );
        let available_num = false;
        for (let i = 0; i < filpresentdata.length; i++) {
            if (randomNum === filpresentdata[i]["id"]) {
                available_num = true;
                break;
            }
        }
        while (available_num === false) {
            randomNum = getRandomInt(21);
            for (let i = 0; i < filpresentdata.length; i++) {
                if (randomNum === filpresentdata[i]["id"]) {
                    available_num = true;
                    break;
                }
            }
        }

        const present = filpresentdata.find((item) => item.id === randomNum);
        const newpresentdata = presentdatatemp.filter(
            (item) => item.id !== randomNum
        );
        setpresentname(present.name);
        localStorage.setItem("present", JSON.stringify(newpresentdata));
        setcurrentprogress(3);
        setTimeout(() => {
            setcurrentprogress(2);
        }, 3000);
    };
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
                            <img
                                src="/christmastree.png"
                                alt="AMSL Corp"
                                className="drawAni"
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
                                style={{
                                    marginTop: 30,
                                    marginLeft: 20,
                                    marginRight: 20,
                                }}
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
                                paddingTop: 30,
                                paddingBottom: 30,
                                paddingLeft: 20,
                                margin: "auto",
                                textAlign: "left",
                                fontSize: 32,
                            }}
                        >
                            Play again and again until everyone get a present.
                        </Title>
                        <Button
                            shape="round"
                            size="large"
                            style={{
                                width: "95%",
                                height: "100%",
                                minWidth: 240,
                                // marginLeft: 10,
                                // marginRight: 10,
                                background: "white",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: 32,
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
                            <img
                                className="drawAni"
                                src="/luckydraw.gif"
                                alt="AMSL Corp"
                                // width={260}
                                // height={180}
                            />
                        </Row>
                        <Steps
                            current={currentprogress}
                            size="small"
                            style={{
                                marginBottom: 20,
                                marginLeft: 20,
                                marginRight: 20,
                            }}
                        >
                            <Step title="Welcome" />
                            <Step title="Draw" />
                            <Step title="Results" />
                        </Steps>
                        <Select
                            style={{
                                width: "80%",
                                minWidth: 240,
                                fontSize: 22,
                            }}
                            value={userid}
                            onChange={(value) => handleChangeDropDown(value)}
                        >
                            <Option disabled value="">
                                Select a user
                            </Option>
                            {notselecteddata.map((item, index) => (
                                <Option key={index} value={item.id}>
                                    {item.name}
                                </Option>
                            ))}
                        </Select>
                        <Button
                            shape="round"
                            size="large"
                            style={{
                                width: "80%",
                                height: "100%",
                                minWidth: 240,
                                marginTop: 20,
                                background: "#663399",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 32,
                            }}
                            onClick={() => handleSubmitDraw()}
                        >
                            Draw
                        </Button>
                        <Button
                            shape="round"
                            size="large"
                            style={{
                                width: "80%",
                                height: "100%",
                                minWidth: 240,
                                marginTop: 20,
                                background: "white",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: 32,
                            }}
                            onClick={() => handleClickBackToDraw()}
                        >
                            Back
                        </Button>
                    </div>
                </main>
            </div>
        );
    } else if (currentprogress === 2) {
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
                            <img
                                className="drawAni"
                                src="/present.png"
                                alt="AMSL Corp"
                            />
                        </Row>
                        <Title
                            level={3}
                            style={{
                                color: "black",
                                marginTop: 40,
                                fontSize: 24,
                            }}
                        >
                            Results: <br />
                        </Title>
                        <Title
                            level={4}
                            style={{
                                color: "#333333",
                                marginBottom: 40,
                                fontSize: 48,
                            }}
                        >
                            Congrats {userid.toUpperCase()} for winning a{" "}
                            {presentname}!
                        </Title>
                        <Steps
                            current={currentprogress}
                            size="small"
                            style={{
                                marginLeft: 20,
                                marginRight: 20,
                                width: "90%",
                            }}
                        >
                            <Step title="Welcome" />
                            <Step title="Draw" />
                            <Step title="Results" />
                        </Steps>

                        <Button
                            shape="round"
                            size="large"
                            style={{
                                width: "100%",
                                height: "100%",
                                minWidth: 240,
                                marginTop: 40,
                                background: "#663399",
                                color: "white",
                                fontSize: 32,
                            }}
                            onClick={() => handleClickBackToDraw()}
                        >
                            Draw Again
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
                        <img
                            src="/luckydraw.gif"
                            alt="AMSL Corp"
                            className="drawAniBig"
                        />
                    </div>
                </main>
            </div>
        );
    }
}
