import React, { memo, useEffect, useState, useRef } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  /**定义内部的状态 */
  const [showRight, setShowRight] = useState(false);
  const [postIndex, setPostIndex] = useState(0);
  const totalDistanceRef = useRef();

  /** 组件渲染完毕，判断是否显示右侧的按钮 */

  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  /**事件处理的逻辑*/
  function rightClickHandle() {
    const newIndex = postIndex + 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPostIndex(newIndex);
    // 是否显示右边的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft);
  }
  return (
    <ViewWrapper>
      <button>左边的按钮</button>
      {showRight && <button onClick={rightClickHandle}>右边的按钮</button>}

      <div className="scroll-content" ref={scrollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
