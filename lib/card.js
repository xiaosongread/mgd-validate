const vcity = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江 ', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北 ', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏 ', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外 ' }
const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
let birth = ''
// 检查号码是否符合规范，包括长度，类型
function isCardNo(card) {
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  return /(^\d{15}$)|(^\d{17}(\d|X)$)/.test(card)
}
// 取身份证前两位,校验省份
function checkProvince(card) {
  const province = card.substr(0, 2)
  return vcity[province] !== undefined
  // return true
}

// 根据身份证获取身份
function getProvince(card) {
  const province = card.substr(0, 2)
  return vcity[province]
}

// 检查生日是否正确
function checkBirthday(card) {
  const len = card.length
  var arrdata, year, month, day, birthday
  // 身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
  if (len === 15) {
    const refifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/
    arrdata = card.match(refifteen)
    year = arrdata[2]
    month = arrdata[3]
    day = arrdata[4]
    birthday = new Date('19' + year + '/' + month + '/' + day)
    return verifyBirthday('19' + year, month, day, birthday)
  }
  // 身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
  if (len === 18) {
    var reeighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
    arrdata = card.match(reeighteen)
    year = arrdata[2]
    month = arrdata[3]
    day = arrdata[4]
    birthday = new Date(year + '/' + month + '/' + day)
    // console.log(birthday)
    return verifyBirthday(year, month, day, birthday)
  }
  return false
}
// 校验日期
function verifyBirthday(year, month, day, birthday) {
  birth = `${year}-${month}-${day}`
  var now = new Date()
  var nowyear = now.getFullYear()
  // 年月日是否合理
  if (birthday.getFullYear() === +year && (birthday.getMonth() + 1) === +month && birthday.getDate() === +day) {
    // 判断年份的范围（3岁到150岁之间)
    var time = nowyear - year
    if (time >= 3 && time <= 150) {
      return true
    }

    return false
  }
  return false
}
// 校验位的检测
function checkParity(card) {
  // 15位转18位
  card = changeFivteenToEighteen(card)
  var len = card.length
  var valnum
  var cardTemp = 0
  if (len === 18) {
    for (let i = 0; i < 17; i++) {
      cardTemp += card.substr(i, 1) * arrInt[i]
    }
    valnum = arrCh[cardTemp % 11]
    if (valnum === card.substr(17, 1)) {
      return true
    }
    return false
  }
  return false
}
function changeFivteenToEighteen(card) {
  var cardTemp = 0

  if (card.length === 15) {
    card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6)
    for (let i = 0; i < 17; i++) {
      cardTemp += card.substr(i, 1) * arrInt[i]
    }
    card += arrCh[cardTemp % 11]
    return card
  }
  return card
}
function getSex(card) {
  let sex = 0
  let sexNo = 0
  if (card.length === 18) {
    sexNo = card.substring(16, 17)
  } else if (card.length === 15) {
    sexNo = card.substring(14, 15)
  }
  sex = sexNo % 2
  if (sex === 0) {
    sex = 2
  }
  const sexName = sex === 1 ? '男' : '女'
  return sexName
}
function getAge(card) {
  if (card === null) return null
  const len = card.length
  var arrdata, year, month, day, age

  var myDate = new Date()
  var nowY = myDate.getFullYear()
  var nowM = myDate.getMonth() + 1
  var nowD = myDate.getDate() // 获取当前日(1-31)
  if (len === 15) {
    const refifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/
    arrdata = card.match(refifteen)
    year = arrdata[2]
    month = arrdata[3]
    day = arrdata[4]

    if (nowM > month || (nowM === month && nowD >= day)) { age = nowY - year } else { age = nowY - year - 1 }
  }
  if (len === 18) {
    var reeighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
    arrdata = card.match(reeighteen)
    year = arrdata[2]
    month = arrdata[3]
    day = arrdata[4]

    if (nowM > month || (nowM === month && nowD >= day)) { age = nowY - year } else { age = nowY - year - 1 }
  }
  if (age < 0) return null
  else return age
}
function checkIDcard(card) {
  let errNo = 0
  if (card === '') {
    errNo = 1
  } else if (isCardNo(card) === false) {
    errNo = 2
  } else if (checkProvince(card) === false) {
    errNo = 3
  } else if (checkBirthday(card) === false) {
    errNo = 4
  } else if (checkParity(card) === false) {
    errNo = 5
  }
  return { errno: errNo, birthday: birth, gender: getSex(card), age: getAge(card), provice: getProvince(card) }
}

export {
  isCardNo,
  checkProvince,
  checkBirthday,
  checkParity,
  changeFivteenToEighteen,
  getSex,
  getAge,
  checkIDcard,
  getProvince
}
