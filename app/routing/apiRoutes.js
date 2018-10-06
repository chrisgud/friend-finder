const friends = require('../data/friends');

module.exports = function (app) {

    app.post('/api/friends/', (req, res) => {
        let friend = req.body;
        let match = 0;
        for (let i = 1; i < friends.length; i++) {
            if (getDistance(friends[i], friend) <
                getDistance(friends[match], friend)) {
                match = i;
            }
        }
        friends.push(req.body);
        res.send(friends[match]);
    });
    app.get('/api/friends/', (req, res) => {
        return res.json(friends);
    });
    getDistance = (friend1, friend2) => {
        if (friend1.scores.length === friend2.scores.length) {
            let distance = 0;
            for (let i = 0; i < friend1.scores.length; i++) {
                distance += Math.abs(friend1.scores[i] - friend2.scores[i]);
            }
            return distance;
        } else console.log(`Unexpected Error: Data Mismatch by scores`);
    }

};