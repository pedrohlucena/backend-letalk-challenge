export function calculateCompoundInterest(
  principal: number,
  interestRate: number,
  installmentValue: number,
) {
  let accumulatedAmount = principal

  let adjustedDebtorsBalance = principal

  while (adjustedDebtorsBalance > 0) {
    const interest = adjustedDebtorsBalance * interestRate

    accumulatedAmount += interest

    adjustedDebtorsBalance += interest
    adjustedDebtorsBalance -= installmentValue
  }

  const monthsToPayOff = Math.ceil(accumulatedAmount / installmentValue)

  return { accumulatedAmount, monthsToPayOff }
}
