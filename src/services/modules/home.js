import leviRequest from "..";

export function getHomeGoodPriceData() {
    return leviRequest.get({
        url: "/home/goodprice"
    })
}

export function getHomeHighScoreData() {
    return leviRequest.get({
        url: "/home/highscore"
    })
}