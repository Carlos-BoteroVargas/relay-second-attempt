import data from './data.json';

class User {}
class Friend {}

// Mock data
const viewer = new User();
viewer.id = '1';
viewer.name = 'me';
const friends = data.map((obj) => {
    const friend = new Friend();
    friend.id = require('crypto').randomBytes(10).toString('hex');
    friend.firstName = obj.firstName;
    friend.lastName = obj.lastName;
    friend.gender = obj.gender;
    friend.language = obj.language;
    friend.email = obj.email;
    friend.image = obj.image;
    return friend;
});

module.exports = {
    getUser: (id) => id === viewer.id ? viewer : null,
    getViewer: () => viewer,
    getFriend: (id) => friends.find(w => w.id == id),
    getFriends: () => friends,
    User,
    Friend,
};