import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async storyId => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && destructreFields(data));
  return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  return result;
};

const destructreFields = ({ id, by, url, time, title }) => ({
  id,
  by,
  url,
  time,
  title
});

export const mapTime = timestamp => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} months`;
  }
  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} days`;
  }
  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} hours`;
  }
  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
};
