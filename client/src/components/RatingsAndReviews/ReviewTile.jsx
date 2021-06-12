import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stars from '../SharedComponents/Stars';

const TileArea = styled.div`
  display: grid;
  grid-template-areas: "StarRating ReviewerName Date"
                       "Summary Summary Summary"
                       "ReviewBody ReviewBody ReviewBody"
                       "Response Response Response"
                       "Helpful Helpful Helpful";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  grid-gap: 5px;
  border: solid;
  margin-bottom: 10px;
`;

const RatingArea = styled.div`
  grid-area: StarRating;
  place-self: center;
`;

const ReviewerName = styled.div`
  font-style: oblique;
  grid-area: ReviewerName;
  place-self: center;
`;

const Date = styled.div`
  grid-area: Date;
  place-self: center end;
  padding-right: 10px;
`;

const ReviewSummary = styled.div`
  grid-area: Summary;
 `;

const ReviewBody = styled.div`
  grid-area: ReviewBody;
  font-size: x-small;
  .green {
    color: green;
  }
`;

const Photos = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
.photo {
  margin-left: 10px;
  border-radius: 4px;
  background: white;
  display: block;
  object-fit: contain;
  width: 5%;
  max-height: 69px;
  min-height: 0;
  &:hover {
    border: 1px solid #C0C0C0;
    background: grey;
    cursor: pointer;
  };
}
`;

const ReviewResponse = styled.div`
  grid-area: Response;
`;

const Helpful = styled.div`
  grid-area: Helpful;
`;

const Modal = styled.div`
  display: flex;
  position: fixed;
  padding-top: 10%;
  padding-bottom: 10%;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.3);

  .modal-content {
    border-radius: 10%;
    background-color: white;
    margin: auto;
    width: 80%;
  }
`;

// let clickedImage;

const Tile = (props) => {
  // const [productInfo, setProductInfo] = useState(props.); NOOOOooooooo
  const { data } = props;
  const { body, date, helpfulness, photos, rating,
    recommend, response, reviewer_name, summary } = data;
  const formattedDate = new window.Date(date);
  const prettyDate = formattedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  const [expand, setExpand] = useState(false);
  const [helpful, setHelpful] = useState(0);
  const [notHelpful, setNotHelpful] = useState(0);
  const [clickedImage, setClickedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   setShowModal(true);
  // }, [clickedImage]);

  let showButton;
  let sellerResponse;
  let modalImage;
  let recommended;

  const showImages = (photo) => <img className="photo thumbnail" key={photo.id} alt={photo.id} src={photo.url} />;

  if (body.length > 250) {
    if (expand) {
      showButton = <button type="button" onClick={() => { setExpand(!expand); }}>Show Less</button>;
    } else {
      showButton = <button type="button" onClick={() => { setExpand(!expand); }}>Show More</button>;
    }
  } else {
    showButton;
  }

  if (response) {
    if (response.length > 0) {
      sellerResponse = (
        <div className="response">
          Response from Seller:
          {response}
        </div>
      );
    }
  }

  if (showModal) {
    modalImage = (
      <Modal onClick={() => { setShowModal(!showModal); }}>
        <img alt="modal" className="modal-content" src={clickedImage} />
      </Modal>
    );
  }

  if (recommend) {
    recommended = (
      <div>
        <span className="green">
          &#10003;
        </span>
        I recommend this product
      </div>
    );
  }

  console.log(data);

  return (
    <TileArea>
      <RatingArea>
        <Stars stars={rating} />
      </RatingArea>
      <ReviewerName>{reviewer_name}</ReviewerName>
      <Date>{prettyDate}</Date>
      <ReviewSummary>
        <hr />
        <b>
          {summary}
        </b>
      </ReviewSummary>
      <ReviewBody>
        {expand ? body : body.slice(0, 250)}
        <br />
        {showButton}
        <br />
        <Photos onClick={(e) => { setClickedImage(e.target.src); setShowModal(!showModal); }}>
          {photos.map(showImages)}
          {modalImage}
        </Photos>
        {recommended}
      </ReviewBody>
      <ReviewResponse>
        {sellerResponse}
      </ReviewResponse>
      <Helpful>
        Was this review helpful?
        <span onClick={() => { setHelpful(helpful + 1) }}> Yes:{helpful}
        </span>
        <span onClick={() => { setNotHelpful(notHelpful + 1) }}> No: {notHelpful}
        </span>
      </Helpful>
    </TileArea>
  );
};

export default Tile;

// const showMore = (
//   <button onClick={setExpand(!expand)} value="Show more"></button>
// )

// const showLess = (
//   <button onClick={setExpand(!expand)} value="Show less"></button>
// )
