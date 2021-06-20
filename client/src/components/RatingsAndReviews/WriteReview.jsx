import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SelectableStar from './SelectableStar';

const sheen = keyframes`
  100% {
    transform: rotateZ(60deg) translate(1em, -9em);
  }
`;

const CreateReviewButton = styled.div`
  grid-area: CreateReview;
  margin: 50px 0px;
  place-self: stretch;

    .modalButton {
      background-color: #FF5A5F;
      border-radius: 22px;
      border: 2px solid #FF5A5F;
      position: relative;
      overflow: hidden;
      color: #fff;
      font-size: 16px;
      padding: 12px;

      :hover::after, :focus::after {
        animation: ${sheen} 2s forwards;
      }
      ::after {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
        transform: rotateZ(60deg) translate(-5em, 7.5em);
      }
    };

    .modal {
      position: fixed;
      z-index: 1;
      inset: 0px;
      width: 100%;
      height: 100%;
      transition-duration: 4s;
      background-color: rgba(0,0,0,0.4);
      display: flex;
      justify-content: center;
    };
    .reviewForm {
      border-radius: 22px;
      position: fixed;
      background: white;
      min-width: 30%;
      padding: 2%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      z-index: 2;
      max-height: 80vh;
      overflow: auto;
      flex-direction: column;
      justify-content: stretch;
    }
`;

const RowContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;

    .centered {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 20px;
    }

    .eachRadioButton {
      justify-content: space-evenly;
    }

    .centerItems {
      align-items: flex-start;
    }
    padding-bottom: ${(props) => (props.input ? '10px' : '0px')}
`;

const VerticalContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 20px;

    .nested {
      margin-top: 0px;
    }

    .centered {
      justify-content: center;
      align-items: center;
    }
`;

// Make sure that the Parent is position: relative!
const CenteredToParent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    font-size: 2em;
    color: #bababa;
`;

const Title = styled.div`
    align-text: left;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
`;

const StyledInput = styled.input`
    min-width: 100%;
    border: 1px solid #a6a6a6;
    border-top-color: #949494;
    border-radius: 3px;
    height: 40px;
    font-family: 'Montserrat', sans-serif;
`;

const ReviewTextArea = styled.textarea`
    width: 100%;
    height: 120px;
    border: 1px solid #a6a6a6;
    border-top-color: #949494;
    border-radius: 3px;
    font-family: 'Montserrat', sans-serif;

`;

const CoralStyledButton = styled.button`
  position: relative;
  background-color: white;
  border-radius: 22px;
  border: 2px solid #FF5A5F;
  color: black;
  padding: 12px;
  margin: 10px 0px;
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

const ClearBackgroundButton = styled.button`
    display: inline-block;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    background: none;
`;

const MediaButton = styled.button`
    position: relative;
    height: 60px;
    width: 60px;
    border: none;
    background-color: none;
    padding: 0;
    margin: 0;
    border-radius: 10px;
    background-image: repeating-linear-gradient(0deg, #bababa, #bababa 10px, transparent 10px, transparent 16px, #bababa 16px), repeating-linear-gradient(90deg, #bababa, #bababa 10px, transparent 10px, transparent 16px, #bababa 16px), repeating-linear-gradient(180deg, #bababa, #bababa 10px, transparent 10px, transparent 16px, #bababa 16px), repeating-linear-gradient(270deg, #bababa, #bababa 10px, transparent 10px, transparent 16px, #bababa 16px);
    background-size: 2px 100%, 100% 2px, 2px 100% , 100% 2px;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
    .mediaInput {
      position: relative;
      height: 100%;
      width: 100%;
      opacity: 0;
    }
}
`;

const ClearFieldSet = styled.fieldset`
    border: none;
    padding: 0;
    margin: 0;
    ${(props) => {
    if (props.row) {
      return 'display: flex';
    }
    return 'display';
  }}
`;

const LabelForm = styled.label`
    font-size: 12px;
    margin-left: 10px;
`;

const InputNoPadding = styled.input`
    margin: 0;
`;

// not working clear border;
// .xButton {
//   display: inline-block;
//   cursor: pointer;
//   :hover::before {
//     background: red;
//   }
//   ::before {
//     display: inline-block;
//     position: absolute !important;
//     width: 32px !important;
//     height: 32px !important;
//     top: 50% !important;
//     left: 50% !important;
//     transform: translate(-50%, -50%) !important;
//     border-radius: 50% !important;
//     box-sizing: border-box !important;
//   };
// };

const attributeValues = {
  rating: '',
  summary: '',
  body: '',
  recommend: false,
  name: '',
  email: '',
  photos: [],
  characteristics: {},
};

const WriteReview = (characteristics) => {
  const productAttributes = Object.keys(characteristics);

  for (let i = 0; i < productAttributes.length; i += 1) {
    attributeValues.characteristics[productAttributes[i]] = '';
  }

  const [values, setValues] = useState(attributeValues);
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    setFiles([...files, URL.createObjectURL(e.target.files[0])]);
  };

  const removeFile = (e) => {
    const updatedFiles = files.filter((item, index) => index !== e);
    setFiles(updatedFiles);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    value = JSON.parse(value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  let modal;

  if (showModal) {
    modal = (
      <div className="modal">
        <form className="reviewForm">
          <RowContainer className="closeForm">
            <ClearBackgroundButton aria-label="Close" type="button" className="xButton" onClick={() => { setShowModal(!showModal); }}>
              <div>
                X
              </div>
            </ClearBackgroundButton>
            <div className="centered">
              Create Review
            </div>
          </RowContainer>
          <VerticalContainer className="rating">
            <Title>
              Overall Rating
            </Title>
            <SelectableStar />
          </VerticalContainer>
          <VerticalContainer className="username">
            <RowContainer>
              <Title>
                Your Username
              </Title>
            </RowContainer>
            <StyledInput
              type="text"
              label="name"
              name="name"
              value={values.name}
              placeholder="  Your username"
              onChange={handleInputChange}
            />
          </VerticalContainer>
          <VerticalContainer className="email">
            <Title>
              Your Email
            </Title>
            <StyledInput
              type="text"
              label="email"
              name="email"
              value={values.email}
              placeholder="  Your email"
              onChange={handleInputChange}
            />
          </VerticalContainer>
          <VerticalContainer className="recommended">
            <Title>
              Would you recommend this product?
            </Title>
            <ClearFieldSet>
              <RowContainer className="centerItems" input>
                <InputNoPadding type="radio" name="recommend" id="recoYes" value="true" onClick={handleRadioChange} />
                <LabelForm htmlFor="txt">Yes</LabelForm>
              </RowContainer>
              <RowContainer className="centerItems">
                <InputNoPadding type="radio" name="recommend" id="recoNo" value="false" onClick={handleRadioChange} />
                <LabelForm htmlFor="recoNo">No</LabelForm>
              </RowContainer>
            </ClearFieldSet>
          </VerticalContainer>
          <VerticalContainer className="reviewSummary">
            <Title>
              Add a headline
            </Title>
            <StyledInput
              type="text"
              label="summary"
              name="summary"
              value={values.summary}
              placeholder="  What's most important to know?"
              onChange={handleInputChange}
            />
          </VerticalContainer>
          <VerticalContainer className="reviewBody">
            <Title>
              Add a written review
            </Title>
            <ReviewTextArea
              label="body"
              name="body"
              value={values.body}
              placeholder="  What did you like or dislike?"
              onChange={handleInputChange}
            />
          </VerticalContainer>
          <VerticalContainer className="addPhotoVideo">
            <Title>
              Add a photo or video
            </Title>
            <MediaButton type="button">
              <CenteredToParent>
                +
              </CenteredToParent>
              <input className="mediaInput" name="photos" type="file" accept="image/*,.pdf" />
            </MediaButton>
            <RowContainer>

              <div className="form-group preview">
                {values.photos.length > 0 &&
                  values.photos.map((item, index) => {
                    return (
                      <div key={item}>
                        <img src={item} alt="" />
                        <button type="button" onClick={() => deleteFile(index)}>
                          delete
                        </button>
                      </div>
                    );
                  })}
              </div>
            </RowContainer>
          </VerticalContainer>
          <VerticalContainer className="featureRating">
            <Title>
              Rate features
            </Title>
          </VerticalContainer>
          <CoralStyledButton aria-label="submit-review" type="submit" value="submit">
            Submit
          </CoralStyledButton>
        </form>
      </div>
    );
  } else {
    modal = null;
  }

  return (
    <CreateReviewButton>
      <button className="modalButton" type="button" onClick={() => { setShowModal(!showModal); }}>
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
