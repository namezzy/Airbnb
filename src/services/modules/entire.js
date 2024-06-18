import leviRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return leviRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}
