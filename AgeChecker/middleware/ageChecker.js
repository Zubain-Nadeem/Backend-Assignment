const ageChecker = (req, res, next) => {
  const age = req.body.age;

  if (age === undefined) {
    return res.send(`Age is not Define`);
  }
  if (age < 18) {
    return res.send(`you are not eligible`);
  }

  next();
};

module.exports = ageChecker;
