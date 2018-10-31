
// A list of PYDT game ids and slack channels to post to

// example:
// module.exports.games = {
//  '93d53660-17d4-48f9-be87-7cf01286d79e': {
//      'slack_url': '"https://hooks.slack.com/services/TBSABC123/CBA987XZY/vrmlNWSrTbkkttjiJ5O1dep4";',
//      'channel': 'general'
//  },
//  '2a740247-d9b9-484c-9225-a75a78ffdc4b': {
//      'slack_url': '"https://hooks.slack.com/services/TBSABC123/CBA987XZY/vrmlNWSrTbkkttjiJ5O1dep4";',
//      'channel': 'pydt-notifications'
//  }
// };

module.exports.games = {
    'PYDT_GAME_UUID': {
        'slack_url': 'SLACK_FULL_WEBHOOK_URL',
        'channel': 'SLACK_CHANNEL'
    }
};
