module.exports = (app) => {
    require('./user-group.js')(app);
    require('./user.js')(app);
};
