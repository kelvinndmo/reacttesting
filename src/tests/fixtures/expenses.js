import moment from 'moment'

const expenses = [
  {
    description: 'kelvin',
    id: '1 ',
    note: 'back 95',
    createdAt: 0,
    amount: 50
  },
  {
    description: 'kelvin onkundi',
    id: '2',
    note: 'back 95',
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
    amount: 50000
  },
  {
    description: 'kelvin ndemo',
    id: '3',
    note: 'back 95',
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
    amount: 5000
  }
]

export default expenses
