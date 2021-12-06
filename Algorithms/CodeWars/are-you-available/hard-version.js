/**
 * Are you available? - hard version
 *
 * @param {string[]} person1Mtgs,
 * @param {string[]} person2Mtgs,
 * @param {number} desiredTime,
 * @returns {string[]}
 *
 * description:
 *
 *     Given two arrays of strings such as:
 *
 *  Person1: ["10:00-11:30", "11:30-12:00", "16:30-17:30" ]
 *  Person2: ["10:30-13:30", "16:00-17:00" ]
 *  Third argument: desired meeting time: 30 <Int> minutes, or any in [1,5,10,15,30]
 *
 *  Return an array of possible meeting times that are at least as long as the desired meeting time.
 *  Valid meetings times will always fall between 9:00-18:00, Military time.
 *
 *
 * @example,
 *          person1Mtgs: ["10:00-11:30", "11:30-12:00", "16:30-17:30" ]
 *          person2Mtgs: ["10:30-13:30", "16:00-17:00" ]
 *          desiredTime: 30
 * @returns,
 *          [
 *          '09:00-09:30','09:30-10:00','13:30-14:00','14:00-14:30',
 *          '14:30-15:00','15:00-15:30','15:30-16:00','17:30-18:00'
 *          ]
 *
 */

function findMeetingTimes (person1Mtgs, person2Mtgs, desiredTime) {
  const [table, calendar] = createCalendar(desiredTime)
  const openSlots = []

  let formula = 9 * (60 / desiredTime)

  let p1buffer = new ArrayBuffer(formula)
  let p2buffer = new ArrayBuffer(formula)

  let p1bits = new DataView(p1buffer)
  let p2bits = new DataView(p2buffer)

  person1Mtgs.forEach(meeting => {
    let [start, end] = [...meeting.split('-')]
    for (let i = table[start]; i < table[end]; i++) {
      p1bits.setInt8(i, 1)
    }
  })

  person2Mtgs.forEach(meeting => {
    let [start, end] = [...meeting.split('-')]
    for (let i = table[start]; i < table[end]; i++) {
      p2bits.setInt8(i, 1)
    }
  })

  for (let i = 0; i < formula; i++) {
    let booked = p1bits.getInt8(i) | p2bits.getInt8(i)
    !booked && openSlots.push(calendar[i] + '-' + calendar[i + 1])
  }

  return openSlots.length > 0 ? openSlots : 'No meeting times available'
}

function createCalendar (time) {
  const calendar = {}
  const table = {}

  let interval = [9, -time]
  let str = ''

  for (let i = 0, j = 1; i <= 9 * (60 / time); i++, j++) {
    interval[1] += time
    str =
      String(interval[0]).padStart(2, '0') +
      ':' +
      (interval[1] <= 5
        ? String(interval[1]).padStart(2, '0')
        : String(interval[1]).padEnd(2, '0'))
    table[str] = i
    calendar[i] = str
    if (j === 60 / time) {
      interval[0]++
      interval[1] = -time
      j = 0
    }
  }
  return [table, calendar]
}

// findMeetingTimes(["10:00-11:30", "11:30-12:00", "16:30-17:30" ],["10:30-13:30", "16:00-17:00" ],1)
// findMeetingTimes(["10:00-11:30", "11:30-12:00", "16:30-17:30" ],["10:30-13:30", "16:00-17:00" ],5)
// findMeetingTimes(["10:00-11:30", "11:30-12:00", "16:30-17:30" ],["10:30-13:30", "16:00-17:00" ],10)
// findMeetingTimes(["10:00-11:30", "11:30-12:00", "16:30-17:30" ],["10:30-13:30", "16:00-17:00" ],15)
// findMeetingTimes(["10:00-11:30", "11:30-12:00", "16:30-17:30" ],["10:30-13:30", "16:00-17:00" ],30)

