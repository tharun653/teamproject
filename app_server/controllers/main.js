/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Online Grocery Store' });
    };
module.exports = {
    index
    };