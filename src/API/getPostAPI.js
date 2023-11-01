import axios from "axios";

async function getPostAPI(post_id) {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `https://api.mandarin.weniv.co.kr/post/${post_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response);

    // 게시글 내용을 반환합니다.
    return response.data.post;
  } catch (e) {
    const ErrorMessage = await e.response.data.message;
    return ErrorMessage;
  }
}

export default getPostAPI;
