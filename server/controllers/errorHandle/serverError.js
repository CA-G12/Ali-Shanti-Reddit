const { join } = require('path');

const serverError = (req, res) => {
    const file = join(__dirname, '..', '..', '..', 'public', 'html', '500.html');
    res.status('500').sendFile(file);
};

module.exports = serverError;