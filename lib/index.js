const cards = require('./card.js')
const validate = {
  cards,
  userName: function(min, max) {
    return new RegExp(`^[a-zA-Z0-9_]{${min},${max}}$`)
  },

  /**
  * @export a-z A-Z 0-9 区间
  * @param {string} val
  * @param {number} min 最小值 max 最大值
  * @example let val = '123aaa';validate.rangeNum(val, 5,10)
  * @return {boolean} true
  */
  rangeNum: function(val, min, max) {
    const reg = this.userName(min, max)
    return reg.test(val)
  },

  /**
  * @export a-z 任意字符 区间
  * @param {string} val
  * @param {number} min 最小值 max 最大值
  * @example let val = '123aaa';validate.numL(val, 5,10)
  * @return {boolean} true
  */
  numL: function(val, min, max) {
    const reg = new RegExp(`^.{${min},${max}}$`)
    return reg.test(val)
  },

  /**
  * @export 是否是手机号
  */
  isPhone: function(val) {
    const reg = /^1(3|4|5|7|8)\d{9}$/
    return reg.test(val)
  },

  /**
  * @export 是否是固定电话
  */
  isMobile: function(val) {
    const reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
    return reg.test(val)
  },

  /**
  * @export 是否是浮点数
  */
  isFloat: function(val) {
    const reg = /^(-?\d+)(\.\d+)?$/
    return reg.test(val)
  },

  /**
  * @export 邮箱校验
  */
  isEmail: function(val) {
    const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    return reg.test(val)
  },
  /**
  * @export 数字Number校验
  */
  isNumber: function(val) {
    if (typeof (val) === 'number') {
      return true
    } else {
      return false
    }
  },
  /**
  * @export 身份证件校验
  * 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  */
  isCard: function(val) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(val)
  }
  /**
  * @export 根据省市区校验身份证件
  */

}
export default validate
