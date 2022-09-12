const generateError = (msg, status) => {
  const error = new Error(msg);
  error.msg = msg;
  error.status = status;
  console.log(error.msg);
  return error;
};
module.exports = { generateError };
