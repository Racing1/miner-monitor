const https = require('https');
const axios = require('axios');

module.exports = async (address) => {
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  const balanceData = await axios.get(`http://burst.btfg.space:8124/burst?requestType=getAccount&account=${address}`, {httpsAgent: agent});
  return balanceData.data.effectiveBalanceNXT / 100000000;
};