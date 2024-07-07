import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";

import { BrowserWrapper } from "./style";

const PictureBrowser = memo((props) => {
  // 当图片浏览器展示出来时 滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return() => {
        document.body.style.overflow = "auto"
    }
  }, []);
  return <BrowserWrapper>PictureBrowser</BrowserWrapper>;
});

PictureBrowser.propTypes = {};

export default PictureBrowser;
