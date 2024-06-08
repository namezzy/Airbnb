import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabWrapper } from "./style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClickHandle(index, item) {
    setCurrentIndex(index);
    tabClick(index,item)
  }

  return (
    <TabWrapper>
      {tabNames.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames("item", { active: index === currentIndex })}
            onClick={(e) => itemClickHandle(index, item)}
          >
            {item}
          </div>
        );
      })}
    </TabWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
