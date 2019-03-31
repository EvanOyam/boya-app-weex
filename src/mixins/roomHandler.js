export const roomToPeriod = function(room) {
  switch (room) {
    case '9:00-10:00':
      return '1'
    case '10:00-11:00':
      return '2'
    case '11:00-12:00':
      return '3'
    case '12:00-13:00':
      return '4'
    case '13:00-14:00':
      return '5'
    case '14:00-15:00':
      return '6'
    case '15:00-16:00':
      return '7'
    case '16:00-17:00':
      return '8'
    case '17:00-18:00':
      return '9'
    case '18:00-19:00':
      return '10'
    case '19:00-20:00':
      return '11'
    case '20:00-21:00':
      return '12'
    default:
      break
  }
}

export const periodToRoom = function(period) {
  switch (period) {
    case '1':
      return '9:00-10:00'
    case '2':
      return '10:00-11:00'
    case '3':
      return '11:00-12:00'
    case '4':
      return '12:00-13:00'
    case '5':
      return '13:00-14:00'
    case '6':
      return '14:00-15:00'
    case '7':
      return '15:00-16:00'
    case '8':
      return '16:00-17:00'
    case '9':
      return '17:00-18:00'
    case '10':
      return '18:00-19:00'
    case '11':
      return '19:00-20:00'
    case '12':
      return '20:00-21:00'
    default:
      break
  }
}
