import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subtitle="默认子标题的数据" } = props;
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      <div className="subtitle">{subtitle}</div>
    </HeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeader;
