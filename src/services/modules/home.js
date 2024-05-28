import leviRequest from "..";

export function getHomeGoodPriceData() {
    return leviRequest.get({
        url: "/home/goodprice"
    })
}