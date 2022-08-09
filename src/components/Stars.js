import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  // let tempStars = [];
  // for (let index = 1; index < Math.floor(stars); index++) {
  //   tempStars[index] = (
  //     <span>
  //       <BsStarFill />
  //     </span>
  //   );
  // }
  // if (stars % 1 != 0) {
  //   tempStars[tempStars.length] = (
  //     <span>
  //       <BsStarHalf />
  //     </span>
  //   );
  // }
  // for (let index = tempStars.length; index <= 5; index++) {
  //   tempStars[index] = (
  //     <span>
  //       <BsStar />
  //     </span>
  //   );
  // }
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    if (stars >= index + 1) {
      return (
        <span key={index}>
          <BsStarFill />
        </span>
      );
    }
    if (stars % 1 >= 0.5) {
      return (
        <span key={index}>
          <BsStarHalf />
        </span>
      );
    }
    if (stars < index + 1) {
      return (
        <span key={index}>
          <BsStar />
        </span>
      );
    }
    return _;
  });
  // const tempStars = Array.from({ length: 5 }, (_, index) => {
  //   const number = index + 0.5;
  //   return (
  //     <span key={index}>
  //       {stars >= index + 1 ? (
  //         <BsStarFill />
  //       ) : stars >= number ? (
  //         <BsStarHalf />
  //       ) : (
  //         <BsStar />
  //       )}
  //     </span>
  //   );
  // });

  return (
    <Wrapper>
      <div>{tempStars}</div>
      <p>({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
