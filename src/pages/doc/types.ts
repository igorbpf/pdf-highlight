// @flow

export type T_LTWH = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export type T_Scaled = {
  x1: number;
  y1: number;

  x2: number;
  y2: number;

  width: number;
  height: number;
};

export type T_Position = {
  boundingRect: T_LTWH;
  rects: Array<T_LTWH>;
  pageNumber: number;
};

export type T_ScaledPosition = {
  boundingRect: T_Scaled;
  rects: Array<T_Scaled>;
  pageNumber: number;
  usePdfCoordinates?: boolean;
};

export type T_Content = {
  text?: string;
  image?: string;
};

export type T_HighlightContent = {
  content: T_Content;
};

export type T_Comment = {
  text: string;
  emoji: string;
};
export type T_HighlightComment = {
  comment: T_Comment;
};

export type T_NewHighlight = {
  position: T_ScaledPosition;
} & T_HighlightContent &
  T_HighlightComment;

export type T_Highlight = { id: string } & T_NewHighlight;
