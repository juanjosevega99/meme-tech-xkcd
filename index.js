import fs from 'fs-extra';
import axios from 'axios';

const INITIAL_ID_XKCD_COMIC = 2500;
const MAX_ID_XKCD_COMIC = 2600;

for (
  let comicId = INITIAL_ID_XKCD_COMIC;
  comicId < MAX_ID_XKCD_COMIC;
  comicId++
) {
  const url = `https://xkcd.com/${id}/info.0.json`;
  const { data } = await axios.get(url);
  const { num: id, news, transcript, ...restOfComic } = data;

  fs.writeJSON(`./comics/${id}.json`, restOfComic, { spaces: 2 });
}
