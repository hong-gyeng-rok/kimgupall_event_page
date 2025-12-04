import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// 페이지 컴포넌트 임포트
import Home from "./page/home";
import Banner from "./page/banner";

/**
 * 모든 페이지에 공통으로 적용될 레이아웃 컴포넌트
 */
function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

/**
 * 애플리케이션의 전체 라우트 구조를 정의하는 메인 컴포넌트
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Layout 컴포넌트를 부모로 하는 자식 라우트들 */}
        <Route index element={<Home />} />
        <Route path="banner" element={<Banner />} />

        {/* 일치하는 경로가 없을 때 보여줄 페이지 */}
        <Route path="*" element={<h2>페이지를 찾을 수 없습니다.</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
