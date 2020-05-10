const team = {
 _players: [
   {firstName: 'Ryan', lastName: 'Arcindiacono', age: 35},
   {firstName: 'Wendell', lastName: 'Carter Jr.', age: 27},
   {firstName: 'Kris', lastName: 'Dunn', age: 29},
 ],
 _games: [
   { opponent: 'Raptors', teamPoints: 95, opponentPoints: 88},
   { opponent: 'Golden State Warriors', teamPoints: 75, opponentPoints: 90},
   { opponent: 'Lakers', teamPoints: 99, opponentPoints: 90},
 ], 
 get players() {
   return this._players;
 },
 get games() {
   return this._games;
 },

 addPlayer(firstName, lastName, age) {
   let player = {
     firstName: firstName,
     lastName: lastName,
     age: age
   };
   this.players.push(player);
 },
 addGame(oppName, points, oppPoints){
   const game = {
     opponent: oppName,
     points: points,
     opponentPoints: oppPoints
   }
   this.games.push(game);
 }
}
team.addPlayer('Steph', 'Curry', 30);
team.addPlayer('Lebron', 'James', 36);
team.addPlayer('Kevin', 'Durant', 38);

//console.log(team.players);

team.addGame('Celtics', 90, 92);
team.addGame('Houston Rockets', 95, 88);
team.addGame('Spurs', 78, 91);

console.log(team.games);

