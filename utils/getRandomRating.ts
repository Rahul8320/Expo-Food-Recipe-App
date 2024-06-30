export const getRandomRating = (): number => {
  // Generate a random number between 0 and 4 (inclusive of 0, exclusive of 5)
  const randomValue = Math.random() * 5;

  // Round to 1 decimal place
  const rating = Math.round(randomValue * 10) / 10;

  // Ensure the rating is between 1 and 5
  return Math.max(1, Math.min(5, rating));
};
