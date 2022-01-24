import { getURL } from "./api";

export function getMedia(media) {
//   const imageUrl = media.url.startsWith("/")
  const imageUrl = media
    ? getURL(media.people)
    : media.people;
  return imageUrl;
}