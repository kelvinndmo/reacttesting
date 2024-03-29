import moment from 'moment'

export default (expenses, { text, startDate, EndDate, sortBy }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt)
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true
      const EndDateMatch = EndDate
        ? EndDate.isSameOrAfter(createdAtMoment, 'day')
        : true
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase())

      return startDateMatch && EndDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
    })
}
