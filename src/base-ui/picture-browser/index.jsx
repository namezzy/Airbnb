import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";

import { BrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon-close";

const PictureBrowser = memo((props) => {
    const {pictureUrls,closeClick} = props
  // 当图片浏览器展示出来时 滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return() => {
        document.body.style.overflow = "auto"
    }
  }, []);

  /**事件监听的逻辑 */
  function closeBtnClickHandle() {
      if(closeClick) closeClick()
  }

  return (
    <BrowserWrapper>
    <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
            <IconClose/>
        </div>
    </div>
    <div className="list"></div>
    <div className="indicator"></div>
  </BrowserWrapper>
  )
});

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
};

export default PictureBrowser;
