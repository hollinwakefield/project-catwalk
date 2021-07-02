import React from "react";
import axios from "axios";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import RatingBreakdown from "./RatingBreakdown";
import LoadingSpinner from "../SharedComponents/ElizabethDonatedSpinner";
import WriteReview from "./WriteReview";
import Sorting from "./Sorting";

const StyledDiv = styled.div`
  display: grid;
  grid-template-areas:
    "RatingBreakdown Sorting"
    "RatingBreakdown ReviewList"
    "ProductBreakdown ReviewList"
    "CreateReview ReviewList";
  grid-template-columns: minmax(0px, 1fr) minmax(0px, 3fr);
  grid-template-rows: auto auto minmax(0px, 1fr) auto;
  min-height: 80vh;
  max-width: 80vw;
  gap: 1em;
  padding: 2rem;
  margin: auto;
  place-items: center;
  font-size: 1.5em;
  text-align: center;
`;

class RatingAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      avg: 0,
      totalReviews: 2,
      recommended: "",
      sort: "",
      characteristics: {},
    };
  }

  //   {
  //     "avg": 3.6,
  //     "reviews": 39,
  //     "recommended": "87%",
  //     "characteristics": {
  //         "Fit": {
  //             "id": 84504,
  //             "value": "3.1935483870967742"
  //         },
  //         "Length": {
  //             "id": 84505,
  //             "value": "2.8064516129032258"
  //         },
  //         "Comfort": {
  //             "id": 84506,
  //             "value": "3.1935483870967742"
  //         },
  //         "Quality": {
  //             "id": 84507,
  //             "value": "2.7096774193548387"
  //         }
  //     }
  // }

  //   {
  //     "product_id": "25167",
  //     "ratings": {
  //         "1": "2",
  //         "2": "3",
  //         "3": "0",
  //         "4": "2",
  //         "5": "2"
  //     },
  //     "recommended": {
  //         "true": "7",
  //         "false": "2"
  //     },
  //     "characteristics": {
  //         "Size": {
  //             "id": 84234,
  //             "value": "2.7777777777777777"
  //         },
  //         "Width": {
  //             "id": 84235,
  //             "value": "3.4444444444444446"
  //         },
  //         "Quality": {
  //             "id": 84237,
  //             "value": "3"
  //         },
  //         "Comfort": {
  //             "id": 84236,
  //             "value": "2.888888888888889"
  //         }
  //     }
  // }

  componentDidMount() {
    const { productId, passBackAvgAndTotalReviews } = this.props;
    axios
      .get(`http://localhost:3158/api/reviews/meta/${productId}`)
      // .get(`/reviews/meta/${productId}`)
      .then((res) => {
        const { data } = res;
        // console.log(data);

        this.setState(
          {
            loaded: true,
            avg: data.avg,
            totalReviews: data.totalReviews,
            recommended: data.recommended,
            characteristics: data.characteristics,
          },
          () => {
            const { avg, totalReviews } = this.state;
            passBackAvgAndTotalReviews(avg, totalReviews);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // const { reviews } = this.props;
    let quickReviewList;
    const { loaded, avg, totalReviews, recommended, sort, characteristics } =
      this.state;
    const { productId } = this.props;
    if (!loaded) {
      quickReviewList = <LoadingSpinner />;
    } else {
      quickReviewList = (
        <ReviewList
          totalReviews={totalReviews}
          productId={productId}
          sort={sort}
        />
      );
    }
    return (
      <>
        <StyledDiv id="ratings-and-reviews">
          <RatingBreakdown
            avg={avg}
            totalReviews={totalReviews}
            recommended={recommended}
          />
          <Sorting totalReviews={totalReviews} />
          {quickReviewList}
          <WriteReview characteristics={characteristics} />
        </StyledDiv>
      </>
    );
  }
}

export default RatingAndReviews;
