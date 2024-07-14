import React, { memo, useState } from "react";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

const AppHeader = memo(() => {
  /** 定义组件内部的状态 */
  const [isSearch, setIsSearch] = useState(true);

  /** 从redux中获取数据 */

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );

  const { isFixed } = headerConfig;
  console.log(isFixed);

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchBarClick={e=>setIsSearch(true)} />
          <HeaderRight />
        </div>
      </div>
      <SearchAreaWrapper isSearch={isSearch} />
      {isSearch && <div className="cover"></div>}
    </HeaderWrapper>
  );
});

export default AppHeader;
