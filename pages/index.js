import Head from "next/head";
import { Button, Typography, Row, Steps, Select, Table } from "antd";
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
        name: "???????????????-??????",
        pgroup: 2,
    },
    {
        id: 2,
        name: "OT290 4D?????????????????? ???????????? ???????????? ???????????? ???????????? ???????????? ????????????????????? ??????????????????",
        pgroup: 2,
    },
    {
        id: 3,
        name: "??????????????????Miffy R007 ????????????????????????",
        pgroup: 1,
    },
    {
        id: 4,
        name: "???????????????????????????-????????????Clip Series_IPX7????????????+??????????????????",
        pgroup: 1,
    },
    {
        id: 5,
        name: "??????TSK ?????????????????????????????????????????????L-30",
        pgroup: 1,
    },
    {
        id: 6,
        name: "??????????????????????????? - ?????????(15??????)+??????(15??????)",
        pgroup: 1,
    },
    {
        id: 7,
        name: "DELONGHI KG200 ??????????????? ????????????????????? ???????????????",
        pgroup: 2,
    },
    {
        id: 8,
        name: "(??????) NM4 3???1????????????????????? ?????? ?????? ?????? EMS NECK MASSAGER ??????????????? ???????????? xp-pk718-wh/nm4 (?????????????????? ????????????)",
        pgroup: 1,
    },
    {
        id: 9,
        name: "?????????????????9000 mAh (??????) ??? GPW9000G",
        pgroup: 1,
    },
    {
        id: 10,
        name: "???Snowman????????????????????????????????????(N52)",
        pgroup: 1,
    },
    {
        id: 11,
        name: "????????????????????????????????? ???????????? ????????? ???????????? ???????????? ????????????",
        pgroup: 1,
    },
    {
        id: 12,
        name: "(??????) NM4 3???1????????????????????? ?????? ?????? ?????? EMS NECK MASSAGER ??????????????? ???????????? xp-pk718-wh/nm4 (?????????????????? ????????????)",
        pgroup: 1,
    },
    {
        id: 13,
        name: "????????????????????????",
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
        name: "?????? Nike Sandal",
        pgroup: 2,
    },
    {
        id: 18,
        name: "DOMA Keep warm Cup Set",
        pgroup: 2,
    },
    {
        id: 19,
        name: "??????0.6?????????????????????",
        pgroup: 2,
    },
    {
        id: 20,
        name: "???????????????",
        pgroup: 2,
    },
    {
        id: 21,
        name: "?????????????????????????????????????????????",
        pgroup: 2,
    },
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Present",
        dataIndex: "present",
        key: "present",
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
    const [numofpresent, setnumofpresnet] = useState(21);
    const [presentmap, setpresentmap] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem("not_selected")) {
            localStorage.setItem("not_selected", JSON.stringify(userlist));
        }
        if (!localStorage.getItem("present")) {
            localStorage.setItem("present", JSON.stringify(presentList));
        }
        setnotselecteddata(JSON.parse(localStorage.getItem("not_selected")));
    }, []);
    useEffect(() => {
        console.log(numofpresent);
        if (numofpresent === 0) {
            setTimeout(() => {
                setcurrentprogress(4);
                setpresentmap(JSON.parse(localStorage.getItem("presentmap")));
            }, 10000);
        }
    }, [numofpresent]);
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
        setnumofpresnet(fnotselectedStorage.length);
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

        let presentmap = JSON.parse(localStorage.getItem("presentmap")) || [];
        presentmap.push({ name: userid.toUpperCase(), present: present.name });
        localStorage.setItem("presentmap", JSON.stringify(presentmap));

        setcurrentprogress(3);
        setTimeout(() => {
            setcurrentprogress(2);
        }, 2000);
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
    } else if (currentprogress === 3) {
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
                        <Table dataSource={presentmap} columns={columns} />
                    </div>
                </main>
            </div>
        );
    }
}
