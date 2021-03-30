const homepage = function (req, res) {
  res.locals = {
    title: 'Home',
  };
  res.render('frontend/home');
};

const getStaticPage = function (req, res) {
  res.locals = {
    title: req.params.page,
  };
  res.render(`frontend/${req.params.page}`, {
    layout: false,
  });
};

module.exports = {
  homepage,
  getStaticPage,
};
