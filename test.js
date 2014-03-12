var api = require('./steamAPI');

var steamScraper = new api.connection;

steamScraper.resolveVanity('PieKingOne');
steamScraper.resolveVanity('aaron123');

steamScraper.GetPlayerSummaries(76561197963635996);
steamScraper.GetPlayerSummaries(76561197969671378);

steamScraper.GetPlayerBans(76561197963635996);
steamScraper.GetPlayerBans(76561197969671378);

steamScraper.GetUserGroupList(76561197963635996);
steamScraper.GetUserGroupList(76561197969671378);