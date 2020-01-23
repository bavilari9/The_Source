const CryptoJS = require("crypto-js");
const Codes = require ('../models/Codes'),
router = require('express').Router()

const actions = {
  getCode: async (code) => {
    let retVal = {
      valid: false
    };
    const dbCode = await Codes.findCode(code);
    if (dbCode && dbCode.length > 0) {
      const cipherCode = CryptoJS.AES.encrypt(code, 'SECRET_KEY');
      retVal = {
        valid: true,
        cipherCode: cipherCode.toString()
      };
    }
    console.log("@retVal", retVal)
    return retVal;
  },
  checkCode: (req) => {
    return Boolean(req.cookies && req.cookies['early-access-code']);
  }
};

router.get('/checkCode', (req, res) => {
  res.json(actions.checkCode(req));
});
router.get('/', (req, res) => {
  // require the code from the front end 
  let code = req.query.code;
  console.log("@code", code)
  actions.getCode(code).then(_data => {
    if (_data && _data.valid) {
      res.setHeader('Cache-Control', 'private');
      res.cookie("early-access-code", _data.cipherCode.toString())
    }
    res.json(_data);
  });
})


module.exports = {
  router,
  actions
};