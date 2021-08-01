import React, { useState, useEffect } from "react";

import { Container, TipCompact, TipCard } from "./styles";

interface TipProps {
  onConfirm: (comment: { text: string; emoji: string }) => void;
  onOpen: () => void;
  onUpdate?: () => void;
}

const Tip: React.FC<TipProps> = ({ onConfirm, onOpen, onUpdate }) => {
  const [compact, setCompact] = useState<boolean>(true);
  const [text, setText] = useState<string>("");
  const [emoji, setEmoji] = useState<string>("");

  useEffect(() => {
    if (onUpdate) {
      onUpdate();
    }
  }, [compact]);

  return (
    <Container>
      {compact ? (
        <TipCompact
          onClick={() => {
            onOpen();
            setCompact(false);
          }}
        >
          Adicione comentário
        </TipCompact>
      ) : (
        <TipCard
          onSubmit={(event: any) => {
            event.preventDefault();
            onConfirm({ text, emoji });
          }}
        >
          <div>
            <textarea
              width="100%"
              placeholder="Your comment"
              autoFocus
              value={text}
              onChange={(event) => setText(event.target.value)}
              ref={(node) => {
                if (node) {
                  node.focus();
                }
              }}
            />
            <div>
              {["💩", "😱", "😍", "🔥", "😳", "⚠️"].map((_emoji) => (
                <label key={_emoji}>
                  <input
                    checked={emoji === _emoji}
                    type="radio"
                    name="emoji"
                    value={_emoji}
                    onChange={(event) => setEmoji(event.target.value)}
                  />
                  {_emoji}
                </label>
              ))}
            </div>
          </div>
          <div>
            <input type="submit" value="Save" />
          </div>
        </TipCard>
      )}
    </Container>
  );
};

export default Tip;
