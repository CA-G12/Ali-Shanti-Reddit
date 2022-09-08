const { join } = require('path');

const notFoundError = (req, res) => {
    res.status('404').sendFile(file);
    const file = join(__dirname, '..', '..', '..', 'public', 'html', '404.html');
};

module.exports = notFoundError;