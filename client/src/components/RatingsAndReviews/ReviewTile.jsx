import React, { useState } from 'react';
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
  grid-template-rows: 100px 100px 100px auto 100px;
  grid-gap: 5px;
  background: turquoise;
  border: solid;
  border-radius: 30px;
`;

const RatingArea = styled.div`
  grid-area: StarRating;
  place-self: center;
`;

const ReviewerName = styled.div`
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
  background: green;
 `;

const ReviewBody = styled.div`
  grid-area: ReviewBody;
  font-size: x-small;
  background: red;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  };
`;

const Photos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
.photo {
  display: block;
  object-fit: contain;
  width: 5%;
  max-height: auto;
  min-height: 0;
}
`;

const ReviewResponse = styled.div`
  grid-area: Response;
  background: yellow;
`;

const Helpful = styled.div`
  grid-area: Helpful;
`;

const showImages = (photo) => <img className="photo" key={photo.id} alt={photo.id} src={photo.url} />;

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

  let showButton;
  let sellerResponse;

  if (body.length > 250) {
    if (expand) {
      showButton = <button type="button" onClick={() => { setExpand(!expand); }}>Show Less</button>;
    } else {
      showButton = <button type="button" onClick={() => { setExpand(!expand); }}>Show More</button>;
    }
  } else {
    showButton;
  }

  if (response.length > 0) {
    sellerResponse = (
      <div className="response">
        Response from Seller:
        {response}
      </div>
    );
  }

  return (
    <TileArea>
      <RatingArea>
        <Stars stars={rating} />
      </RatingArea>
      <ReviewerName>{reviewer_name}</ReviewerName>
      <Date>{prettyDate}</Date>
      <ReviewSummary>
        <b>
          {summary}
        </b>
      </ReviewSummary>
      <ReviewBody>
        {expand ? body : body.slice(0, 250)}
        <br />
        {showButton}
        <br />
        <Photos>
        {photos.map(showImages)}
        </Photos>
      </ReviewBody>
      <ReviewResponse>
        {sellerResponse}
      </ReviewResponse>
      <Helpful>
        Was this review helpful?
        <span onClick={()=> {setHelpful(helpful + 1)}}> Yes:{helpful}
        </span>
        <span onClick={()=> {setNotHelpful(notHelpful + 1)}}> No: {notHelpful}
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
