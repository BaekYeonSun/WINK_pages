import React, {useEffect, useState} from "react";
import {Write} from "../components/timeline/Write";
import {TimeLine} from "../components/timeline/TimeLine";

export function getMyInformation(){
    return {
        name: '백연선',
        birth: '2000-10-19',
        phone: '010-3511-6353',
        address: '서울특별시 종로구',
        img_url: 'https://user-images.githubusercontent.com/55418359/103430487-f0996980-4c07-11eb-9aaf-dac38deeed1a.png',
    }
}

async function createFeed(name, body) {
    const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: body,
            owner: name
        }),
    });
    console.log(await result.json());
    window.location.reload();
}

async function readFeeds(){
    const feedResult = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/', {
        method: 'GET',
    });
    return await feedResult.json();
}

export function TimeLinePage(props){
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const server = async () => {
            setFeeds(await readFeeds());
        }
        server();
    }, []);

    return <>
        <Write
            readFeeds = {readFeeds}
            setFeeds = {setFeeds}
            writeFunc = {createFeed}
        />
        <div>
            <TimeLine
                feeds = {feeds}
            />
        </div>
    </>;
}