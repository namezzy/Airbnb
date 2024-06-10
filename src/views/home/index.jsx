import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyO } from "@/utils";

const Home = memo(() => {
  /**从Redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
      }),
      shallowEqual
    );

  /** 派发一步的事件：发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"));
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.333333%"/>
        </div> */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
