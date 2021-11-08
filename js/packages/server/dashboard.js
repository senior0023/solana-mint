let data = {};
const getStatistics = () => {  
  
  return data;
}

const getFee = function() {
  return 0.03;
}

const setFee = function(req) {
  console.log('fee setting in db:', req.body.fee);
}

module.exports = { getStatistics, getFee, setFee }