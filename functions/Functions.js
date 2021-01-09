const map = {
  'a' : 'á|à|ã|â|À|Á|Ã|Â',
  'e' : 'é|è|ê|É|È|Ê',
  'i' : 'í|ì|î|Í|Ì|Î',
  'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
  'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
  'c' : 'ç|Ç',
  'n' : 'ñ|Ñ'
};

function normalize(str) {
  str = str.toLowerCase();
  for (var pattern in map) {
    str = str.replace(new RegExp(map[pattern], 'g'), pattern);
  }
  return str;
}

function getLogEmbed(discordBot, message, args) {
  return null;
}

exports.normalize = normalize; 