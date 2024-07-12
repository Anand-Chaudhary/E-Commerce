const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('CHAL KAAM KAR BHADWE');
})

module.exports = router;