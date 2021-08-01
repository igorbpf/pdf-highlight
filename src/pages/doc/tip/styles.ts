import styled from "styled-components";

export const Container = styled.div``;

export const TipCompact = styled.div`
  cursor: pointer;
  background-color: #3d464d;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
`;

export const TipCard = styled.form`
  padding: 10px;
  background: #fff;
  background-clip: padding-box;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(37, 40, 43, 0.2);

  textarea {
    font-size: 16px;
    width: 200px;
    height: 70px;
  }

  input[type="submit"] {
    margin-top: 5px;
    font-size: large;
  }
`;

// .Tip__compact {
//   cursor: pointer;
//   background-color: #3d464d;
//   border: 1px solid rgba(255, 255, 255, 0.25);
//   color: white;
//   padding: 5px 10px;
//   border-radius: 3px;
// }

// .Tip__card {
//   padding: 10px;
//   background: #fff;
//   background-clip: padding-box;
//   border: 1px solid #e8e8e8;
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(37, 40, 43, 0.2);
// }

// .Tip__card textarea {
// font-size: 16px;
// width: 200px;
// height: 70px;
// }

// .Tip__card input[type="submit"] {
//   margin-top: 5px;
//   font-size: large;
// }
