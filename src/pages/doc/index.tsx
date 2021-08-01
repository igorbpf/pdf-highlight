/* eslint @typescript-eslint/no-empty-function: "off" */
/* eslint import/no-webpack-loader-syntax: "off" */

import { Component } from "react";
import {
  PdfLoader,
  PdfHighlighter,
  Highlight,
  Popup,
  AreaHighlight,
} from "react-pdf-highlighter";

import Loading from "~/components/loading";

import HighlightPopup from "./highlightPopup";
import SideBar from "./sideBar";
import { Container, PdfViewContainer } from "./styles";
import Tip from "./tip";
import { T_Highlight, T_NewHighlight } from "./types";

const getRandomId = () => String(Math.random()).slice(2);

const parseIdFromHash = () =>
  document.location.hash.slice("#highlight-".length);

const resetHash = () => {
  document.location.hash = "";
};

type State = {
  url: string | undefined;
  highlights: Array<T_Highlight>;
};

class DocumentPdfAnnotator extends Component<any, State> {
  state: State = {
    url: "https://arxiv.org/pdf/1804.06537.pdf",
    highlights: [],
  };

  scrollViewerTo = (_highlight: any) => {};

  scrollToHighlightFromHash = () => {
    const highlight = this.getHighlightById(parseIdFromHash());

    if (highlight) {
      this.scrollViewerTo(highlight);
    }
  };

  componentDidMount() {
    window.addEventListener(
      "hashchange",
      this.scrollToHighlightFromHash,
      false
    );
  }

  getHighlightById(id: string) {
    const { highlights } = this.state;

    return highlights && highlights.find((highlight) => highlight.id === id);
  }

  addHighlight(highlight: T_NewHighlight) {
    const { highlights } = this.state;
    const generatedId = getRandomId();

    if (highlights) {
      this.setState({
        highlights: [{ ...highlight, id: generatedId }, ...highlights],
      });
    }
  }

  updateHighlight(highlightId: string, position: any, content: any) {
    this.setState({
      highlights: this.state.highlights?.map((h) => {
        const {
          id,
          position: originalPosition,
          content: originalContent,
          ...rest
        } = h;
        return id === highlightId
          ? {
              id,
              position: { ...originalPosition, ...position },
              content: { ...originalContent, ...content },
              ...rest,
            }
          : h;
      }),
    });
  }

  render() {
    const { url, highlights } = this.state;
    console.log({ url, highlights });
    return (
      <Container>
        {highlights && <SideBar highlights={highlights} />}
        <PdfViewContainer>
          <PdfLoader url={url} beforeLoad={<Loading />}>
            {(pdfDocument: any) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                enableAreaSelection={(event: any) => event.altKey}
                onScrollChange={resetHash}
                scrollRef={(scrollTo: any) => {
                  this.scrollViewerTo = scrollTo;
                  this.scrollToHighlightFromHash();
                }}
                onSelectionFinished={(
                  position: any,
                  content: any,
                  hideTipAndSelection: any,
                  transformSelection: any
                ) => {
                  return (
                    <Tip
                      onOpen={transformSelection}
                      onConfirm={(comment: any) => {
                        this.addHighlight({ content, position, comment });
                        hideTipAndSelection();
                      }}
                    />
                  );
                }}
                highlightTransform={(
                  highlight: any,
                  index: any,
                  setTip: any,
                  hideTip: any,
                  viewportToScaled: any,
                  screenshot: any,
                  isScrolledTo: any
                ) => {
                  const isTextHighlight = !(
                    highlight.content && highlight.content.image
                  );
                  const component = isTextHighlight ? (
                    <Highlight
                      isScrolledTo={isScrolledTo}
                      position={highlight.position}
                      comment={highlight.comment}
                    />
                  ) : (
                    <AreaHighlight
                      highlight={highlight}
                      onChange={(boundingReact: any) => {
                        this.updateHighlight(
                          highlight.id,
                          { boundingReact: viewportToScaled(boundingReact) },
                          { image: screenshot(boundingReact) }
                        );
                      }}
                    />
                  );
                  return (
                    <Popup
                      popupContent={<HighlightPopup {...highlight} />}
                      onMouseOver={(popupContent: any) =>
                        setTip(highlight, (_highlight: any) => popupContent)
                      }
                      onMouseOut={hideTip}
                      key={index}
                      children={component}
                    />
                  );
                }}
                highlights={highlights}
              />
            )}
          </PdfLoader>
        </PdfViewContainer>
      </Container>
    );
  }
}

export default DocumentPdfAnnotator;
