module.exports = () => (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, HEAD, OPTIONS');
    //res.setHeader('Access-COntrol-Allow-Headers', 'X-Authorization');

    next();
}