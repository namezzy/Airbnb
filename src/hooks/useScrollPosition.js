import { useEffect, useState } from "react";

export default function useScrollPosition() {
    // 状态来记录位置
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    // 监听windows滚动
    useEffect(()=> {
        function handleScroll() {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)

        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    // 返回
    return {scrollX, scrollY}
}