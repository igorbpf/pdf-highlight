import React from "react";

import { Popup } from "./styles";

interface HighlightPopupProps {
  comment: any;
}

const HighlightPopup: React.FC<HighlightPopupProps> = ({ comment }) =>
  comment.text ? (
    <Popup>
      {comment.emoji} {comment.text}
    </Popup>
  ) : null;

export default HighlightPopup;
