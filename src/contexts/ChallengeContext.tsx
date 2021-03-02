import { createContext, ReactNode, useState } from "react";

interface ChallengesContextData {
  currentExperience: number,
  level: number,
  challengeCompleted: number,
  levelUp: () => void,
  startNewChallenge: () => void,
}

interface ChallengeProviderProps {
  children: ReactNode,
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [currentExperience, setCurrentExperience] = useState(0);
  const [level, setLevel] = useState(1);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {

  }

  return (
    <ChallengeContext.Provider
      value={{ 
        currentExperience, 
        level, 
        challengeCompleted, 
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
