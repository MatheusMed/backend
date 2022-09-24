const validateTitle = (req, response, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return response.status(400).json({ message: 'the field title is required' });
  }
  if (body.title === '') {
    return response.status(400).json({ message: 'title cannot be empty' });
  }

  next();
};
const validateStatus = (req, response, next) => {
  const { body } = req;

  if (body.status === undefined) {
    return response.status(400).json({ message: 'the field status is required' });
  }
  if (body.status === '') {
    return response.status(400).json({ message: 'status cannot be empty' });
  }

  next();
};

module.exports = {
  validateTitle,
  validateStatus
};