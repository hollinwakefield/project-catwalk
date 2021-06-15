import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CreateReviewButton = styled.div`
  grid-area: CreateReview;
    .modalButton {
      background-image: radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100% );
    };

    .modal {
      position: fixed;
      z-index: 1;
      inset: 0px;
      width: 100%;
      height: 100%;
      overflow: auto;
      transition-duration: 4s;
      background-color: rgba(0,0,0,0.4);
      display: flex;
      justify-content: center;
    };
    .reviewForm {
      display: flex;
      flex-direction: column;
    }
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-weight: 700;
`;

const CoralStyledButton = styled.button`
  position: relative;
  background-color: white;
  border-radius: 22px;
  border: 2px solid #FF5A5F;
  color: black;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
    &:hover {
      background-color: #FF5A5F;
      color: white;
      border: 2 px solid #FF5A5F;
      border-radius: 22px;
    }
`;

const WriteReview = () => {
  const [showModal, setShowModal] = useState(false);
  let modal;

  useEffect(() => {
    if (showModal) {
      modal = (
        <div className="modal">
          <form className="reviewForm">
            <RowContainer className="rating">
              <VerticalContainer>
                <Title>
                  Overall Rating
                </Title>
              </VerticalContainer>
            </RowContainer>
            <RowContainer className="username">
              <VerticalContainer>
                <Title>
                  Your Username
                </Title>
              </VerticalContainer>
            </RowContainer>
            <RowContainer className="email">
              <VerticalContainer>
                <Title>
                  Your Email
                </Title>
              </VerticalContainer>
            </RowContainer>
            <RowContainer className="recommended">
              <VerticalContainer>
                <Title>
                  Would you recommend this product?
                </Title>
              </VerticalContainer>
            </RowContainer>
            <RowContainer className="reviewSummary">
              <VerticalContainer>
                <Title>
                  Add a headline
                </Title>
              </VerticalContainer>
            </RowContainer>
            <RowContainer className="reviewBody">
              <VerticalContainer>
                <Title>
                  Add a written review
                </Title>
              </VerticalContainer>
            </RowContainer>
            <RowContainer className="addPhotoVideo">
              <VerticalContainer>
                <Title>
                  Add a photo or video
                </Title>
              </VerticalContainer>
            </RowContainer>
            <RowContainer className="addPhotoVideo">
              <VerticalContainer>
                <Title>
                  Add a photo or video
                </Title>
              </VerticalContainer>
            </RowContainer>
            <RowContainer className="featureRating">
              <VerticalContainer>
                <Title>
                  Rate features
                </Title>
              </VerticalContainer>
            </RowContainer>
            <CoralStyledButton type="submit" value="submit">
              Submit
            </CoralStyledButton>
          </form>
        </div>
      );
    } else {
      modal = null;
    }
  }, showModal);

  return (
    <CreateReviewButton>
      <button className="modalButton" type="button" onClick={() => { setShowModal(true); }}>
        Add a Review
      </button>
      {modal}
    </CreateReviewButton>
  );
};

export default WriteReview;

// (
//   <button className="modalButton" type="button" onClick={() => { setShowModal(true); }}>
//     Add a Review
//   </button>
// );
