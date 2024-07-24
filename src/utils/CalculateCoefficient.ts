function calculateCoefficient(numberOfPositionsWithBets: number) {
  if (numberOfPositionsWithBets === 2) {
    return 3;
  }

  return 14;
}

export default calculateCoefficient;