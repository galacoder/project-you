import Moment from 'moment'

export function Calculation(dob: string, fullName: string) {
  console.log('I am calculating')
  const dayToDay = new Date().getDate()
  const monthToDay = new Date().getMonth() + 1
  const yearToDay = new Date().getFullYear()

  // Get the SpliceDOB
  const SpliceDOB = () => {
    // extract the day
    const day = parseInt(dob.slice(0, 2))
    // extract the month
    const month = parseInt(dob.slice(3, 5))
    // extract the year
    const year = parseInt(dob.slice(6, 10))

    return {
      day,
      month,
      year,
    }
  }

  const Day = SpliceDOB().day
  const Month = SpliceDOB().month
  const Year = SpliceDOB().year

  console.log(Day, Month, Year)

  const fullNameTransformed = fullName.toUpperCase().normalize('NFD')

  //Starts using the "convert()" function to assign numbers to letters
  const name = convert(fullNameTransformed)
  //Starts personal year
  if (monthToDay > Month && dayToDay > Day) {
    var personalYear = Month + Day + reduce(yearToDay, true)
  } else {
    var personalYear = Month + Day + reduce(yearToDay - 1, true)
  }

  //Starts the reduction process and addition
  const rulingNumberWhole =
    reduce(Month, true) + reduce(Day, true) + reduce(Year, true)

  console.log(`Ruling Number Whole is ${rulingNumberWhole}`)

  const rulingNumberReduce = reduce(rulingNumberWhole)
  const soulUrgeNumberReduce = reduce(name.soulUrgeNumberWhole)
  const outerExpressNumberReduce = reduce(name.outerExpressNumberWhole)
  const PODReduced = reduce(name.PODNWhole)
  const personalYearReduced = reduce(personalYear)

  // Vietnamese Numerology Translation
  const rulingNumberText = 'Số Chủ Đạo: '
  const outerExpressNumberText = 'Chỉ Số Thể Hiện: '
  const soulUrgeNumberText = 'Chỉ Số Tâm Hồn: '
  const completeNameNumberText = ''
  const personalYearNumberText = 'Năm Cá Nhân: '

  //Sets the consteables for output to HTML
  // const rulingNumberResult =
  //   rulingNumberText +
  //   rulingNumberWhole +
  //   "/" +
  //   checkRulingSpecialNumber(rulingNumberWhole);
  // const outerExpressNumberResult =
  //   outerExpressNumberText +
  //   name.outerExpressNumberWhole +
  //   "/" +
  //   checkOuterExpressSpecialNumber(name.outerExpressNumberWhole);

  // const soulUrgeNumberResult =
  //   soulUrgeNumberText +
  //   name.soulUrgeNumberWhole +
  //   "/" +
  //   checkSoulUrgeSpecialNumber(name.soulUrgeNumberWhole);
  const PODNResult = 'Path of Destiny: ' + name.PODNWhole + '/' + PODReduced
  const PersonalYearResult =
    personalYearNumberText + personalYear + '/' + personalYearReduced

  const rulingNumberSpecialCheck = checkRulingSpecialNumber(rulingNumberWhole)
  const outerExpressNumberSpecialCheck = checkOuterExpressSpecialNumber(
    name.outerExpressNumberWhole
  )
  const soulUrgeNumberSpecialCheck = checkSoulUrgeSpecialNumber(
    name.soulUrgeNumberWhole
  )

  console.log(`------Result from Calculation - NO HOOK ------------`)
  console.log(`Name: ${fullName}`)
  console.log(`DOB: ${dob}`)
  console.log(`Ruling Number : ${checkRulingSpecialNumber(rulingNumberWhole)}`)
  console.log(
    `Outer Express Number : ${checkOuterExpressSpecialNumber(
      name.outerExpressNumberWhole
    )}`
  )
  console.log(`Soul Urge Number : ${soulUrgeNumberSpecialCheck}`)
  console.log(`Personal Year Number : ${personalYearReduced}`)
  console.log(`--------------------------------`)

  //Return User Num Result Object
  return {
    fullName: fullName,
    dob: dob,
    rulingNumber: rulingNumberSpecialCheck,
    outerExpressNumber: outerExpressNumberSpecialCheck,
    soulUrgeNumber: soulUrgeNumberSpecialCheck,
    personalYearNumber: personalYearReduced,
  }

  function checkSoulUrgeSpecialNumber(soulUrgeNumber: number) {
    //         soulUrgeNumerWhole : Vowel
    // 10 Nghi Lam
    // 11 Nghia Lam
    //TODO: try to integrate these switches into the equation
    switch (soulUrgeNumber) {
      case 10:
        return 10
        break
      case 19:
        return 10
        break
      case 28:
        return 10
        break
      case 37:
        return 10
        break
      case 46:
        return 10
      case 55:
        return 10
        break
      case 11:
        return 11
        break
      case 29:
        return 11
        break
      case 38:
        return 11
        break
      case 47:
        return 11
        break
      case 56:
        return 11
        break
      default:
        return soulUrgeNumberReduce
    }
  }

  function checkOuterExpressSpecialNumber(outerExpressNumber: number) {
    // outerExpressNumerWhole : Consonant
    // 10 Yunnie
    // 11 Yunnies
    // 22 Yunnie ngy

    switch (outerExpressNumber) {
      case 22:
        return 22
        break
      case 11:
        return 11
        break
      case 29:
        return 11
        break
      case 38:
        return 11
        break
      case 47:
        return 11
        break
      case 56:
        return 11
        break
      case 10:
        return 10
        break
      case 19:
        return 10
        break
      case 28:
        return 10
        break
      case 37:
        return 10
        break
      case 46:
        return 10
      case 55:
        return 10
        break

      default:
        return outerExpressNumberReduce
    }
  }

  function checkRulingSpecialNumber(rulingNumber: number) {
    // ruling number: birthday date
    // 22 > 10/02/1990
    // 11 > 15/5/1989
    // 10 > 20/1/1969
    switch (rulingNumber) {
      case 22:
        return 22
        break
      case 11:
        return 11
        break
      case 29:
        return 11
        break
      case 38:
        return 11
        break
      case 47:
        return 11
        break
      case 56:
        return 11
        break
      case 10:
        return 10
        break
      case 19:
        return 10
        break
      case 28:
        return 10
        break
      case 37:
        return 10
        break
      case 46:
        return 10
      case 55:
        return 10
        break
      default:
        return rulingNumberReduce
    }
  }
}

function reduce(value: any, once = false) {
  if (isNaN(value)) {
    return 0
  }
  var i = 0
  var valueLength = parseInt(value.toString().length)
  var valueTemp = 0
  while (i < valueLength) {
    valueTemp += parseInt(value.toString().charAt(i))
    i++
  }
  if (!isNaN(valueTemp)) {
    if (parseInt(valueTemp.toString().length) >= 2 && once == false) {
      valueTemp = reduce(valueTemp)
    }
    return valueTemp
  }
}

function convert(value: any) {
  const FullNameLength = parseInt(value.length)
  var PODNWhole = 0
  var OPNWhole = 0
  var SNWWhole = 0
  var i = 0

  while (i < FullNameLength) {
    var NameTemp1 = value.charAt(i)
    var OPNTemp = 0
    var SNTemp = 0

    if (NameTemp1 == 'A') SNTemp = 1
    if (NameTemp1 == 'J' || NameTemp1 == 'S') OPNTemp = 1
    if (NameTemp1 == 'B' || NameTemp1 == 'K' || NameTemp1 == 'T') OPNTemp = 2
    if (NameTemp1 == 'C' || NameTemp1 == 'L') OPNTemp = 3
    if (NameTemp1 == 'U') SNTemp = 3
    if (NameTemp1 == 'D' || NameTemp1 == 'M' || NameTemp1 == 'V') OPNTemp = 4
    if (NameTemp1 == 'E') SNTemp = 5
    if (NameTemp1 == 'N' || NameTemp1 == 'W') OPNTemp = 5
    if (NameTemp1 == 'F' || NameTemp1 == 'X') OPNTemp = 6
    if (NameTemp1 == 'O') SNTemp = 6
    if (NameTemp1 == 'G' || NameTemp1 == 'P') OPNTemp = 7
    if (NameTemp1 == 'H' || NameTemp1 == 'Q' || NameTemp1 == 'Z') OPNTemp = 8
    if (NameTemp1 == 'I') SNTemp = 9
    if (NameTemp1 == 'R') OPNTemp = 9
    if (NameTemp1 == 'Y') SNTemp = 7

    OPNWhole += OPNTemp
    SNWWhole += SNTemp
    PODNWhole += SNTemp
    PODNWhole += OPNTemp
    i++
  }

  return {
    outerExpressNumberWhole: OPNWhole,
    soulUrgeNumberWhole: SNWWhole,
    PODNWhole: PODNWhole,
  }
}
