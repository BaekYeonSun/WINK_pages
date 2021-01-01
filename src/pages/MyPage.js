import React from 'react';
import './MyPage.css';
import { getMyInformation } from './TimeLinePage';

const MyPage = ({match}) => {
    // console.log(match.params.name);
    // const style = {
    //     border: '2px solid black',
    //     padding: '16px',
    // };
    // console.log(getMyInformation());
    const profile = {
        name : getMyInformation().name,
        birth : getMyInformation().birth,
        phone : getMyInformation().phone,
        address : getMyInformation().address,
        img_url : getMyInformation().img_url,
    };

    return (
        <div>
            <h2>{match.params.name}의 페이지</h2>
            <div id={"wrap"}>
                <div id={"profile"}>
                    <img className={"img"} src={profile.img_url}/>
                    <div id={"content"}>
                        <p>이름 : {profile.name}</p>
                        <p>생년월일 : {profile.birth}</p>
                        <p>전화번호 : {profile.phone}</p>
                        <p>주소 : {profile.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;