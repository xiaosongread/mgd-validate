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
rangeNum|min, max|[a-zA-Z0-9_]{${min},${max}}

