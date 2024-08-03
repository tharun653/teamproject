/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'Online Grocery Store',
    pageHeader: {
    title: 'Online Grocery Store',
    strapline: 'Find best grocery stores from home!'
    },
    locations: [{
    name: 'D-Mart',
    address: '1256 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Drinks', 'Grocery', 'Dairy'],
    distance: '100m'
    },{
    name: 'More',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 4,
    facilities: ['Grocery & Staples', 'Daily Essentials'],
    distance: '200m'
    },{
    name: 'Ratnadeep',
    address: '1256 High Street, Reading, RG6 1PS',
    rating: 2,
    facilities: ['Frozen Food', 'Grocery'],
    distance: '250m'
}]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };