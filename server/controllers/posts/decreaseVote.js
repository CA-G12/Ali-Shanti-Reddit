const { voteDecrease } = require("../../database/queries");

const decreaseVote = (req, res, next) => {
  const { id } = req.params;
  return voteDecrease(id)
    .then((data) => res.status(200).json(data.rows[0]))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = decreaseVote;
