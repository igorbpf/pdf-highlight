import React from "react";

import { T_Highlight } from "../types";
import {
  Container,
  Description,
  Highlights,
  HighlightLocation,
  HighlightImage,
  Highlight,
  Quote,
} from "./styles";

type T_ManuscriptHighlight = T_Highlight;

interface SideBarProps {
  highlights: Array<T_ManuscriptHighlight>;
}

const updateHash = (highlight: any) => {
  document.location.hash = `highlight-${highlight.id}`;
};

const Sidebar: React.FC<SideBarProps> = ({ highlights }) => {
  return (
    <Container>
      <Description>
        <h2>Annotations</h2>
        <p>
          <small>
            To create area highlight hold ⌥ Option key (Alt), then click and
            drag.
          </small>
        </p>
      </Description>

      <Highlights>
        {highlights.map((highlight, index) => (
          <Highlight
            key={index}
            onClick={() => {
              updateHash(highlight);
            }}
          >
            <div>
              <strong>{highlight.comment.text}</strong>
              {highlight.content.text ? (
                <Quote>
                  {`${highlight.content.text.slice(0, 90).trim()}…`}
                </Quote>
              ) : null}
              {highlight.content.image ? (
                <HighlightImage>
                  <img src={highlight.content.image} alt={"Screenshot"} />
                </HighlightImage>
              ) : null}
            </div>
            <HighlightLocation>
              Página {highlight.position.pageNumber}
            </HighlightLocation>
          </Highlight>
        ))}
      </Highlights>
    </Container>
  );
};

export default Sidebar;
