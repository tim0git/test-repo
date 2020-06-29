const { insertAdmin } = require('../models/management.model');

exports.postAdmin = (req, res, next) => {
  const { admin_email, venue_id } = req.body;

  insertAdmin(admin_email, venue_id)
    .then(([admin]) => {
      res.status(201).send({ admin });
    })
    .catch(next);
};
