import { useCallback, useEffect, useState } from "react";

export const TypePhase = {
  Typing: "Typing",
  Pausing: "Pausing",
  Deleting: "Deleting",
};

const TYPING_INTERVAL_MIN = 80;
const TYPING_INTERVAL_MAX = 150;
const TYPING_PAUSE_MS = 2000;
const DELETING_INTERVAL = 50;
const DELETING_PAUSE_MS = 500;

const getRandomTypingInterval = () =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) +
  TYPING_INTERVAL_MIN;

export const useTyping = (listText) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(TypePhase.Typing);
  const [typedString, setTypedString] = useState("");

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedString = listText[selectedIndex].slice(
          0,
          typedString.length + 1
        );

        if (nextTypedString === typedString) {
          setPhase(TypePhase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedString(nextTypedString);
        }, getRandomTypingInterval());

        return () => clearTimeout(timeout);
      }
      case TypePhase.Deleting: {
        if (!typedString) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1;
            setSelectedIndex(listText[nextIndex] ? nextIndex : 0);
            setPhase(TypePhase.Typing);
          }, DELETING_PAUSE_MS);
          return () => clearTimeout(timeout);
        }

        const nextRemaining = listText[selectedIndex].slice(
          0,
          typedString.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedString(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case TypePhase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting);
        }, TYPING_PAUSE_MS);

        return () => clearTimeout(timeout);
    }
  }, [listText, typedString, selectedIndex, phase]);

  return {
    typedString,
  };
};
