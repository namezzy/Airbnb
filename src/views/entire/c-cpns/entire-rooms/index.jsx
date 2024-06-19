import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import { useSelector } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = memo(() => {
  /** 从redux中获取roomList数据 */
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
  }));
  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
        })}
      </div>
    </RoomsWrapper>
  );
});

export default EntireRooms;
