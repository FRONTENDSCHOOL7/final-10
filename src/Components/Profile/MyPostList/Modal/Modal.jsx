import React from "react";
import * as S from "./ModalStyle";

function Modal({
  isVisible,
  onClose,
  isMyProfile,
  showConfirm,
  setShowConfirm,
  isAuthor
}) {
  console.log("Is Author in Modal?", isAuthor);
  const preventPropagation = (e) => e.stopPropagation();

  const handleClose = () => {
    setShowConfirm(false);
    onClose();
  };

  return (
    isVisible && (
      <S.ModalOverlay onClick={handleClose}>
        {showConfirm ? (
          <ConfirmModal
            isMyProfile={isMyProfile}
            onClose={onClose}
            preventPropagation={preventPropagation}
            isAuthor={isAuthor}
          />
        ) : (
          <ActionModal
            isMyProfile={isMyProfile}
            setShowConfirm={setShowConfirm}
            preventPropagation={preventPropagation}
            isAuthor={isAuthor}
          />
        )}
      </S.ModalOverlay>
    )
  );
}

function ActionModal({
  isMyProfile,
  setShowConfirm,
  preventPropagation,
  isAuthor
}) {
  return (
    <S.ModalContainer onClick={preventPropagation}>
      {isMyProfile || isAuthor ? (
        <>
          <S.ModalButton>수정하기</S.ModalButton>
          <S.ModalButton onClick={() => setShowConfirm(true)}>
            삭제하기
          </S.ModalButton>
        </>
      ) : (
        <S.ModalButton onClick={() => setShowConfirm(true)}>
          신고하기
        </S.ModalButton>
      )}
    </S.ModalContainer>
  );
}

// 최종 확인 모달
function ConfirmModal({ isMyProfile, onClose, preventPropagation, isAuthor }) {
  return (
    <S.ConfirmDeleteContainer onClick={preventPropagation}>
      <S.ConfirmMessage>
        {isMyProfile || isAuthor
          ? "정말 삭제하시겠습니까?"
          : "정말 신고하시겠습니까?"}
      </S.ConfirmMessage>
      <S.ConfirmContainer>
        <S.ConfirmButton onClick={onClose}>아니오</S.ConfirmButton>
        <S.ConfirmButton>예</S.ConfirmButton>
      </S.ConfirmContainer>
    </S.ConfirmDeleteContainer>
  );
}

export default Modal;