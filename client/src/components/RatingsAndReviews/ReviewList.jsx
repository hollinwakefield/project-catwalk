import React from "react";
import styled from "styled-components";
import axios from "axios";
import Tile from "./ReviewTile";
import DownArrow from "../SharedComponents/downArrows";

const ReviewArea = styled.div`
  grid-area: ReviewList;
  position: relative;
  min-height: 100%;
  min-width: 100%;
  margin-top: 30px;
  padding: 30px;
  overflow: auto;
  max-height: 80vh;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;
  min-width: auto;
`;

const CoralStyledButton = styled.button`
  :before {
    content: "Show More"
  };
  transition: opacity 3s ease-in-out
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

const formatTile = (data) => <Tile key={data.id} data={data} />;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewsRendered: 2,
    };
    this.onShowMore = this.onShowMore.bind(this);
  }

  //   {
  //     "data": [
  //         {
  //             "review_id": 407324,
  //             "rating": 5,
  //             "summary": "tips for FEC",
  //             "recommend": true,
  //             "response": null,
  //             "body": "use hooks, maybe redux, before all that make sure you know how git workflow works. Good luck!!!!",
  //             "date": "2021-06-20T00:00:00.000Z",
  //             "reviewer_name": "friendly Yuki",
  //             "helpfulness": 3,
  //             "photos": []
  //         }
  //     ]
  // }

  // {
  //   "characteristics": [],
  //   "_id": "60dbb3fffdf25ef19ada0124",
  //   "id": 5774940,
  //   "product_id": 1000011,
  //   "rating": 3,
  //   "date": "2021-03-25T01:20:58.122Z",
  //   "summary": "Et sunt maiores eos.",
  //   "body": "Excepturi sed porro. Ut qui alias enim quia. Ab dolorum nostrum. Dolores tenetur nostrum sint ut aliquam. Distinctio harum at culpa natus officia similique quasi iste. Quos magni distinctio rerum inventore voluptatem quo eos.",
  //   "recommend": true,
  //   "reported": false,
  //   "reviewer_name": "Katrina.Breitenberg",
  //   "reviewer_email": "Lourdes.Davis36@hotmail.com",
  //   "response": "null",
  //   "helpfulness": 1,
  //   "photos": []
  // },

  componentDidMount() {
    const { productId, totalReviews, sort } = this.props;
    axios
      // .get(`/reviews/getReviews/${productId}/${totalReviews}/${sort}`)
      .get(`http://localhost:3158/api/reviews/${productId}`)
      .then((data) => {
        this.setState({ reviews: data.data });
        console.log(data);
      })
      .catch((err) => console.log("error: ", err));
  }

  // static getDerivedStateFromError(err) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }
  onShowMore() {
    const { reviewsRendered } = this.state;
    this.setState({ reviewsRendered: reviewsRendered + 2 });
  }

  render() {
    //
    const { reviews } = this.state;
    const { reviewsRendered } = this.state;
    const { totalReviews } = this.props;

    let showMoreButton;
    const viewedTile = reviews.slice(0, reviewsRendered);
    if (totalReviews > 2) {
      if (reviewsRendered < totalReviews) {
        showMoreButton = (
          <VerticalContainer>
            <CoralStyledButton type="button" onClick={this.onShowMore} />
            <DownArrow />
          </VerticalContainer>
        );
      } else {
        showMoreButton = null;
      }
    }
    // const { hasError } = this.state;
    return (
      <ReviewArea>
        {viewedTile.map(formatTile)}
        {showMoreButton}
      </ReviewArea>
    );
  }
}

export default ReviewList;
