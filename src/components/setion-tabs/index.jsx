import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabWrapper } from "./style";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  // tabNames.push("abc");
  // tabNames.push("cba");
  // tabNames.push("123");
  // tabNames.push("321");

  function itemClickHandle(index, item) {
    setCurrentIndex(index);
    tabClick(index, item)
  }

  return (
    <TabWrapper>
      <ScrollView>
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
      </ScrollView>
    </TabWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
