const {User} = require('../db/model/user.js');

module.exports = (app) => {

    app.get('/user-list', (req, res) => {
        if (!req.query.userGroupId) {
            res.status(400);
            res.json();
            return;
        }

        User.findAll({
            attributes: ['id', 'name', 'user_group_id'],
            order: [
                ['created_at', 'asc'],
            ],
        }, {
            where: {
                user_group_id: req.query.userGroupId,
            },
        })
            .then(userList => {
                res.json(userList);
            });
    });

    app.post('/user', (req, res) => {
        console.log(req.body);
        if (
            !req.body.name || !req.body.name.length
            ||
            !req.body.user_group_id
        ) {
            res.status(400);
            res.json();
            return;
        }

        User.create({
            name: req.body.name,
            user_group_id: req.body.user_group_id,
        })
            .then(() => {
                res.json();
            })
    });

    app.put('/user', (req, res) => {
        if (
            !req.body.name || !req.body.name.length
            ||
            !req.body.id || !req.body.user_group_id
        ) {
            res.status(400);
            res.json();
            return;
        }

        User.update({
            name: req.body.name,
            user_group_id: req.body.user_group_id,
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
