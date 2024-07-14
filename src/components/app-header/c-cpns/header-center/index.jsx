import React, { memo, useState } from "react";

import SearchTitles from "@/assets/data/search_titles";
import SearchTabs from "./c-cpns/search-tabs";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon_search-bar";
import SearchSections from "./c-cpns/search-sections";

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;

  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.titles);

  function searchBarClickHandle() {
    
  }
  return (
    <CenterWrapper>
      {!isSearch ? (
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      ) : (
        <div className="search-detail">
          <SearchTabs titles={[titles]} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      )}
    </CenterWrapper>
  );
});

export default HeaderCenter;
