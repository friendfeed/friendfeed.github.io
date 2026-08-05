import type { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { BottomNav } from "./components/BottomNav";
import { HomePage } from "./pages/HomePage";
import { XCrossoverPage } from "./pages/XCrossoverPage";
import { FaqPage } from "./pages/FaqPage";
import { MagazinePage } from "./pages/MagazinePage";
import { GoogleReaderPage } from "./pages/GoogleReaderPage";
import { SearchProvider } from "./services/SearchContext";

// ProfilePage / PyramidPage / HistoryPage exist in ./pages but are
// intentionally not routed yet -- current scope is the home page + the
// X-crossover user list (now at /users), per instruction. They'll come
// back online once the archive and pyramid data passes are done.
//
// "/" used to BE the X-crossover list. It's now the landing/about page
// (HomePage); the user list lives at /users instead -- see Sidebar,
// which puts that link at the top of the nav.

const App: FC = () => {
  const { pathname } = useLocation();
  // The header (logo + search box) is chrome built for the user-browsing
  // pages. The home page is a standalone landing/about page, so it starts
  // flush at the top with no header above it.
  const isHomePage = pathname === "/";

  return (
    <SearchProvider>
      <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
        {!isHomePage && <Header />}
        <div
          className="ff-layout"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 16px",
            width: "100%",
            flex: 1,
          }}
        >
          <Sidebar />
          <main style={{ padding: "16px 0", minWidth: 0, flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<XCrossoverPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/magazine" element={<MagazinePage />} />
              <Route path="/magazine/google-reader" element={<GoogleReaderPage />} />
            </Routes>
          </main>
        </div>
        <footer
          style={{
            textAlign: "center",
            fontSize: 11,
            color: "var(--ff-muted)",
            padding: "16px 0 24px",
            borderTop: "1px solid var(--ff-border)",
          }}
        >
          این پروژه زنده است و به‌طور مرتب با کاربران و اطلاعات تازه
          به‌روزرسانی می‌شود. پروژه‌ای آرشیوی و غیررسمی است و ارتباطی با
          فرندفید یا متا ندارد. تمام داده‌ها از منابع آرشیوی عمومی گردآوری
          شده‌اند.
        </footer>
      </div>
      {/* Mobile app tab bar. CSS-only visibility (see .ff-bottom-nav in
          tokens.css) -- hidden above the 680px breakpoint, where
          <Sidebar> is the nav instead. */}
      <BottomNav />
    </SearchProvider>
  );
};

export default App;
