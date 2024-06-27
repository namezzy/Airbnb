import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";
import { Carousel } from "antd";
import { Rating } from "@mui/material";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  const { selectIndex, setSetIndex } = useState(0)

  const sliderRef = useRef()

  /** 事件处理的逻辑 */
  function controlClickHandle(isRight = true ) {
      isRight ? sliderRef.current.next(): sliderRef.current.prev()
  }
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className="slider">
          <div className="control">
            <div className="btn left" onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width="30" height="30"/>
            </div>
            <div className="btn right" onClick={e => controlClickHandle(true)}>
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {
                itemData?.picture_urls?.map((item,index)=> {
                    return (
                      <div className="dot-item" key={item}>
                          <span className="dot"></span>
                      </div>
                    )
                })
              }
            </Indicator>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {itemData?.picture_urls?.map((item) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" . ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.5}
            readOnly
            size="small"
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
        </div>
        <span className="count">{itemData?.reviews_count}</span>
        {itemData?.bottom_info && (
          <span className="extra">·{itemData?.bottom_info?.content}</span>
        )}
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
