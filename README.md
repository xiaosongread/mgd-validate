# mgd-validate
常用校验

#### install 
```javascript
npm install mgd-validate
```

#### use
```javascript
import validate from 'mgd-validate'

let email = '123@qq.com'
validate.isEmail(email) // return true
```

#### api
methods|parame|describe 
---|:--:|:--:
rangeNum|val, min, max|[a-zA-Z0-9_]{${min},${max}}
numL|val, min, max|.{${min},${max}}
isPhone|val|是否是手机号
isMobile|val|是否是固定电话
isFloat|val|是否是浮点数
isEmail|val|邮箱校验
isNumber|val|数字Number校验
isCard|val|身份证件校验
checkIDcard|val|{ errno: errNo, birthday: birth, gender: getSex(card), age: getAge(card), provice: getProvince(card) }

> 具体详情看源代码





