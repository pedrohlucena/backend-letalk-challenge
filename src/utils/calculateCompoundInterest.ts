import { Installment } from '../models'

function calculateInterest(value: number, interestRate: number) {
  return value * interestRate
}

function calculateDueDate(monthsToMaturity: number) {
  const now = new Date()

  const currentMonth = now.getMonth()

  const dueDate = new Date(now)
  dueDate.setMonth(currentMonth + monthsToMaturity)

  return dueDate.toISOString()
}

function calculateMonthsToPayOff(
  accumulatedAmount: number,
  installmentValue: number,
) {
  return Math.ceil(accumulatedAmount / installmentValue)
}

function calculateValueToPay(
  adjustedDebtorsBalance: number,
  installmentValue: number,
) {
  if (adjustedDebtorsBalance >= installmentValue) {
    return installmentValue
  }

  return adjustedDebtorsBalance
}

export function calculateCompoundInterest(
  principal: number,
  interestRate: number,
  installmentValue: number,
) {
  let accumulatedAmount = principal
  let adjustedDebtorsBalance = principal

  const installmentsProjection: Installment[] = []

  let i = 0

  while (adjustedDebtorsBalance > 0) {
    const debstorsBalance = adjustedDebtorsBalance

    const installment: Installment = {
      debstorsBalance,
    }

    const interest = calculateInterest(adjustedDebtorsBalance, interestRate)

    installment.interest = interest

    accumulatedAmount += interest
    adjustedDebtorsBalance += interest

    installment.adjustedDebtorsBalance = adjustedDebtorsBalance

    const valueToPay = calculateValueToPay(
      adjustedDebtorsBalance,
      installmentValue,
    )

    installment.installmentValue = valueToPay
    adjustedDebtorsBalance -= valueToPay

    const monthsToMaturity = i + 1

    installment.dueDate = calculateDueDate(monthsToMaturity)

    installmentsProjection.push(installment)

    i++
  }

  installmentsProjection.push({ debstorsBalance: 0 })

  const monthsToPayOff = calculateMonthsToPayOff(
    accumulatedAmount,
    installmentValue,
  )

  return { installmentsProjection, accumulatedAmount, monthsToPayOff }
}
