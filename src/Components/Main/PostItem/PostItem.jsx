import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import {
  isTouchFeed,
  postListDataAtom,
  postListDataIndexAtom
} from "../../../Store/Store";
import * as S from "./PostItemStyle";
import siren from "../../../assets/image/icon-small-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import unheart from "../../../assets/image/icon-unheart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import { useNavigate } from "react-router-dom";
import { showDate } from "../../../Functional/DateFunction";
import heartPostAPI from "../../../API/heartPostAPI";
import unheartPostAPI from "../../../API/unheartPostAPI";
// {"\u00A0"} 이거 야무지게 사용가능합니다. react에서 스페이스바 안먹히는거 이걸로 사용하면 됩니다.
// feat 조병민.

function PostItem() {
  const [postData, setPostData] = useRecoilState(postListDataAtom);
  const [hoveredId, setHoveredId] = useState(null);
  const setIsVisible = useSetRecoilState(isTouchFeed);
  const setIndex = useSetRecoilState(postListDataIndexAtom);
  const isVisible = useRecoilValue(isTouchFeed);

  // Modal의 상태에 따라 스크롤을 제어합니다.
  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  const navigate = useNavigate();

  const handleHeartClick = async (e, post_id) => {
    e.stopPropagation();
    const currentHeart = e.target.getAttribute("src");
    let result = "";

    if (currentHeart === unheart) {
      result = await heartPostAPI(post_id);
      //예외처리도 해야댐
      if (result.includes("heart success")) {
        e.target.setAttribute("src", heart);
      } else {
        return;
      }
    } else {
      result = await unheartPostAPI(post_id);
      if (result.includes("unheart success")) {
        e.target.setAttribute("src", unheart);
      } else {
        return;
      }
    }

    let updatedPostData = [...postData];
    let changeDataIndex = postData.findIndex((e) => e.id === post_id);
    if (changeDataIndex !== -1) {
      updatedPostData[changeDataIndex] = {
        ...updatedPostData[changeDataIndex], // 해당 객체의 복사본을 만들고
        hearted: result.includes("un") ? false : true, // 속성을 수정
        heartCount:
          updatedPostData[changeDataIndex].heartCount +
          (result.includes("un") ? -1 : 1)
      };
      setPostData(updatedPostData);
    }
  };

  return (
    <S.Article>
      {postData.map((post, index) => {
        return (
          <S.Section
            key={index}
            onMouseEnter={() => setHoveredId(index)}
            onMouseLeave={() => setHoveredId(null)}
            isHovered={hoveredId === index}
            onClick={() => {
              setIsVisible(true);
              setIndex(index);
            }}>
            <S.PostHeaderImg src={post.author.image} alt="Profile Image" />
            <S.PostWrapper>
              <S.HeaderTextBox>
                <div className="flexBox">
                  <S.HeaderH3>{post.author.username}</S.HeaderH3>
                  <S.HeaderImg src={siren} alt="Siren" />
                </div>
                <S.HeaderP>{post.author.accountname}</S.HeaderP>
              </S.HeaderTextBox>
              <S.PostContent>{post.content}</S.PostContent>
              {post.image !== "" ? (
                <S.PostContentImg src={post.image} alt="Post Content Image" />
              ) : (
                <></>
              )}
              <S.Footer>
                <S.FooterImg
                  src={post.hearted ? heart : unheart}
                  alt="Heart"
                  onClick={(e) => handleHeartClick(e, post.id)}
                />
                <S.FooterCount>{post.heartCount}</S.FooterCount>
                <S.FooterImg src={comment} alt="Comment" />
                <S.FooterCount>{post.commentCount}</S.FooterCount>
              </S.Footer>
              <S.Date>{showDate(post.createdAt)}</S.Date>
            </S.PostWrapper>
          </S.Section>
        );
      })}
    </S.Article>
  );
}

export default PostItem;
