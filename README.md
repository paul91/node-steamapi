node-steamapi - Steam API for Node.js
============

```node-steamapi``` provides simple programmatic access to Steam's API.

```js
var steamapi = require('steamapi');

var credentials = {
  apiKey: 'yourkey'
};

var api = steamapi(credentials);

api.ResolveVanityURL(function(err, results) {
  if(err) return console.error(err);

  api.GetPlayerSummaries(function(err, results) {
    if(err) return console.error(err);

    console.log(results.response.players[0].personaname);
  }, {
    qs: {
      steamids: results.response.steamid
    }
  });

}, {
  qs: {
    vanityurl: 'PieKingOne'
  }
});
```

## Reference

The node-steamapi comes with support for the following API requests.

### ISteamUser:

#### GetFriendList

```json
"version": 1,
"httpmethod": "GET",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "access key"
    },
    {
        "name": "steamid",
        "type": "uint64",
        "optional": false,
        "description": "SteamID of user"
    },
    {
        "name": "relationship",
        "type": "string",
        "optional": true,
        "description": "relationship type (ex: friend)"
    }
]
```

#### GetPlayerBans

```json
"version": 1,
"httpmethod": "GET",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "access key"
    },
    {
        "name": "steamids",
        "type": "string",
        "optional": false,
        "description": "Comma-delimited list of SteamIDs"
    }
]
```

#### GetPlayerSummaries

```json
"version": 2,
"httpmethod": "GET",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "access key"
    },
    {
        "name": "steamids",
        "type": "string",
        "optional": false,
        "description": "Comma-delimited list of SteamIDs (max: 100)"
    }
]
```

#### GetUserGroupList

```json
"version": 1,
"httpmethod": "GET",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "access key"
    },
    {
        "name": "steamid",
        "type": "uint64",
        "optional": false,
        "description": "SteamID of user"
    }
]
```

#### ResolveVanityURL

```json
"version": 1,
"httpmethod": "GET",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "access key"
    },
    {
        "name": "vanityurl",
        "type": "string",
        "optional": false,
        "description": "The vanity URL to get a SteamID for"
    },
    {
        "name": "url_type",
        "type": "int32",
        "optional": true,
        "description": "The type of vanity URL. 1 (default): Individual profile, 2: Group, 3: Official game group"
    }
]
```

### IPlayerService:

#### GetRecentlyPlayedGames

```json
"version": 1,
"httpmethod": "GET",
"description": "Gets information about a player's recently played games",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "Access key"
    },
    {
        "name": "steamid",
        "type": "uint64",
        "optional": false,
        "description": "The player we're asking about"
    },
    {
        "name": "count",
        "type": "uint32",
        "optional": false,
        "description": "The number of games to return (0/unset: all)"
    }
]
```

#### GetSteamLevel

```json
"version": 1,
"httpmethod": "GET",
"description": "Returns the Steam Level of a user",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "Access key"
    },
    {
        "name": "steamid",
        "type": "uint64",
        "optional": false,
        "description": "The player we're asking about"
    }
]
```

#### GetCommunityBadgeProgress

```json
"version": 1,
"httpmethod": "GET",
"description": "Gets all the quests needed to get the specified badge, and which are completed",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "Access key"
    },
    {
        "name": "steamid",
        "type": "uint64",
        "optional": false,
        "description": "The player we're asking about"
    },
    {
        "name": "badgeid",
        "type": "int32",
        "optional": false,
        "description": "The badge we're asking about"
    }
]
```

#### IsPlayingSharedGame

```json
"version": 1,
"httpmethod": "GET",
"description": "Returns valid lender SteamID if game currently played is borrowed",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "Access key"
    },
    {
        "name": "steamid",
        "type": "uint64",
        "optional": false,
        "description": "The player we're asking about"
    },
    {
        "name": "appid_playing",
        "type": "uint32",
        "optional": false,
        "description": "The game player is currently playing"
    }
]
```

#### GetOwnedGames

```json
"version": 1,
"httpmethod": "GET",
"description": "Return a list of games owned by the player",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "Access key"
    },
    {
        "name": "steamid",
        "type": "uint64",
        "optional": false,
        "description": "The player we're asking about"
    },
    {
        "name": "include_appinfo",
        "type": "bool",
        "optional": false,
        "description": "true if we want additional details (name, icon) about each game"
    },
    {
        "name": "include_played_free_games",
        "type": "bool",
        "optional": false,
        "description": "Free games are excluded by default.  If this is set, free games the user has played will be returned."
    },
    {
        "name": "appids_filter",
        "type": "uint32",
        "optional": false,
        "description": "if set, restricts result set to the passed in apps"
    }
]
```

#### GetBadges

```json
"version": 1,
"httpmethod": "GET",
"description": "Gets badges that are owned by a specific user",
"parameters": [
    {
        "name": "key",
        "type": "string",
        "optional": false,
        "description": "Access key"
    },
    {
        "name": "steamid",
        "type": "uint64",
        "optional": false,
        "description": "The player we're asking about"
    }
]
```

### ISteamApps:

#### GetAppList

```json
"version": 2,
"httpmethod": "GET",
"parameters": []
```

#### UpToDateCheck

```json
"version": 1,
"httpmethod": "GET",
"parameters": [
    {
        "name": "appid",
        "type": "uint32",
        "optional": false,
        "description": "AppID of game"
    },
    {
        "name": "version",
        "type": "uint32",
        "optional": false,
        "description": "The installed version of the game"
    }
]
```

## License

```node-steamapi``` is available under the Apache License, Version 2.0. See LICENSE for more details.
