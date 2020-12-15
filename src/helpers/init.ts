import { generateUUID, shuffleOrder } from './random';

export const initializePresents = (presentNames: string[]) => {
  const shuffledPresentNames = shuffleOrder(presentNames);

  const presentObjects = shuffledPresentNames.map((name, index) => {
    const uuid = generateUUID();

    return {
      id: uuid,
      name,
      number: index+1,
    };
  });

  return presentObjects;
};

export const initializeParticipants = (participantNames: string[]) => {
  const participantObjects = participantNames.map((name, index) => {
    const uuid = generateUUID();

    return {
      id: uuid,
      name,
    };
  });

  return participantObjects;
};
