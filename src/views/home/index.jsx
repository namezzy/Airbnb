import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/setion-tabs";

const Home = memo(() => {
  /**从Redux中获取数据 */
  const { goodPriceInfo, highScoreInfo,discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo
    }),
    shallowEqual
  );

  /** 数据转换 */
  const  tabNames = discountInfo.dest_address?.map(item => item.name)
  /** 派发一步的事件：发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"));
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionTabs tabNames={tabNames}/>
          <SectionRooms roomList={discountInfo.dest_list?.["成都"]} itemWidth="33.333333%"/>

        </div>

        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
