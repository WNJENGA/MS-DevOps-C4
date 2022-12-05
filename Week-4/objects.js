// Literal Notation
const player = {
    'name': 'John Doe',
    'club': 'Manchester United',
    'shirtNumber': 7,
    'sponsors': ['Nike','Adidas'],
    'isInjured': false,
}

// Retrieve values
// Method1 -> Dot Notation
// console.log('Player name is', player.name);
// Method2
// console.log('Player shirt number is', player['shirtNumber']);
// Method3
const values = Object.values(player);
// console.log('Object values', values);

// What if we don't know the keys
const keys = Object.keys(player);
// console.log('Object keys', keys);

// Adding properties to objects
player['previousClubs'] = ['Arsenal', 'Birmingham City'];
player.isOutfieldPlayer = true;
console.log(player);

// Constructors
function Player(name, club, shirtNumber, sponsors, isInjured) {
    this.name = name;
    this.club = club;
    this.shirtNumber = shirtNumber;
    this.sponsors = sponsors;
    this.isInjured = isInjured;
}

const newPlayer = new Player('John Doe','Chelsea',10,['Nike'],true);
console.log(newPlayer)