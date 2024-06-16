import leviRequest from "..";

export function getHomeGoodPriceData() {
  return leviRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return leviRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return leviRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return leviRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData() {
  return leviRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return leviRequest.get({
    url: "/home/plus",
  });
}
