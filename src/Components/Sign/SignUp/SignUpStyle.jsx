import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  text-align: center;
  position:relative;
  font-size:12px;
`

export const SignUpForm = styled.form`
  margin: 0 auto;
  width: 86%;
  position: relative;
  top:20%;
  color: #767676;
`
export const SignUpLogo = styled.p`
  margin-bottom: 36px;
  font-size: 25px;
  font-weight:bold;
  color: #000000;
`
export const PTag = styled.p`
    margin:14px 0 8px 0;
    text-align:left;
  `
export const InputTag = styled.input`
  width: 100%;
  height: 23px;
  border-width: 0 0 1px;
  padding: 0 0 1px 0;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #DBDBDB;
  }
  &::placeholder {
    color: #DBDBDB;
    font-size: 14px;
  }
`
export const SubmitBtn = styled.button`
width: 100%;
height: 44px;
margin-top: 18px;
border-radius: 44px;
border: none;
background-color: ${props => props.disabled ? '#8EA1E1' : '#5865f2'};
/* background-color: #8EA1E1; */
/* background-color: #5865f2; */
color: #ffffff;
`
export const Warning = styled.p`
  color: #ff0000;
  text-align:left;
  font-size: 12px;
  margin-top: 4px;
`

export const SetProfileForm = styled.form`
  margin: 0 auto;
  width: 86%;
  position: relative;
  top:20%;
  color: #767676;
`
export const ProfileSettingLogo = styled.p`
  margin-bottom: 36px;
  font-size: 25px;
  font-weight:bold;
  color: #000000;
`
export const ProfileImage = styled.img`
  cursor: pointer;
  width: 130px;
  height: 130px;
  border-radius: 50px;
`
export const ProfileImageChange = styled.input`
  display:none;
`
//모달
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000; //다른 요소보다 항상 앞에 있어야함
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 16px;
`;

export const ModalBtn = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 18px;
  border-radius: 44px;
  border: none;
  background-color: ${props => props.disabled ? '#8EA1E1' : '#5865f2'};
  /* background-color: #8EA1E1; */
  /* background-color: #5865f2; */
  color: #ffffff;
`;
