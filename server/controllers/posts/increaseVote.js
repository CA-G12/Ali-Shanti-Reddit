const { voteIncrease } = require("../../database/queries");

const increaseVote = (req, res, next) => {
  const { id } = req.params;
  return voteIncrease(id)
    .then((data) => res.status(200).json(data.rows[0]))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = increaseVote;
