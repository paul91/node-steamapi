var api = require('./steamAPI');

var steamScraper = new api.connection;

steamScraper.getUser('76561197963635996');
steamScraper.getOwnedGames('76561197963635996');
