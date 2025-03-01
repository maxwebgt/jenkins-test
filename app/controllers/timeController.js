const getCurrentTime = (req, res) => {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  res.send(`The current time is: ${formattedTime}`);
};

module.exports = {
  getCurrentTime
};
