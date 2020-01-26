const {UserGroup} = require('../db/model/user-group.js');

module.exports = (app) => {

    app.get('/user-group-list', (req, res) => {
        UserGroup.findAll({
            attributes: ['id', 'name'],
            order: [
                ['created_at', 'asc'],
            ],
        })
            .then(groupList => {
                res.json(groupList);
            });
    });

    app.post('/user-group', (req, res) => {
        if (!req.body.name || !req.body.name.length) {
            res.status(400);
            res.json();
            return;
        }

        UserGroup.create({
            name: req.body.name,
        })
            .then(() => {
                res.json();
            })
    });

    app.put('/user-group', (req, res) => {
        if (
            !req.body.name || !req.body.name.length
            ||
            !req.body.id
        ) {
            res.status(400);
            res.json();
            return;
        }

        UserGroup.update({
            name: req.body.name,
        }, {
            where: {
                id: req.body.id,
            },
        })
            .then(() => {
                res.json();
            })
    });

};
