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
- [ ] **Implement redux to manage growing complexity**
- [ ] Manage deployment through dev branch, merging automatically on succesful testing
- [ ] Replace Notes with Icons

## Done
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
