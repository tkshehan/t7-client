# T7 Frame Data
Currently hosted at https://t7frames.herokuapp.com/

Server Repo at https://github.com/tkshehan/t7-server

## Tech Stack
- Node.js (ES6+)
- Express.js
- HTML5/CSS3
- React.js
- Enzyme/Jest
- Heroku
- TravisCI *(coming)*

## ToDo
- [ ] Manage deployment through dev branch, merging automatically on succesful testing
- [ ] Replace Notes with Icons
<<<<<<< HEAD
- [ ] react-router for more explicit navigation
- [ ] BEM CSS architecture
=======
- [ ] Set up a react-router for future pages
>>>>>>> 9f69c98ad977a62fd62f72c751e4a54fe4eaa208

## Done
- [x] Implement redux to manage growing complexity
- [x] Write unit tests with enzyme/jest
- [x] Colorize on block -10 and worse [-10, -12, and -15 respectively]
- [x] Add throws for characters with seperate data
- [x] Store data for offline functionality
- [x] Embed punishment videos for each character
- [x] Add initial data to mitigate loading times on first use
- [x] Collapse menu for mobile viewing

## ToDoServerSide
- [ ] Change data storage from json to database(mongo or sql)
- [ ] Add more specific routes and queries
- [ ] Add user authentication for future features
- [ ] Seperate throw data for all characters
- [ ] Find backup source for frame data incase of rbnorway shut-down
- [x] Add checking to reject corrupted data(continuous)
- [x] Clean up markup text from incoming data(continuous)
