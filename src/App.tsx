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
import { FriendFeed88Page } from "./pages/FriendFeed88Page";
import { SubscriptionsPage } from "./pages/SubscriptionsPage";
import { RoomsPage } from "./pages/RoomsPage";
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
  // The header (logo + search box) is chrome built specifically for
  // browsing/searching a directory list, so it renders on all three
  // directory pages -- /users (X-crossover), /subscriptions (all
  // FriendFeed members), and /rooms -- which is what makes them read as
  // the same site instead of different designs. Every other page (home,
  // faq, magazine, google-reader, ...) starts flush at the top with no
  // header above it, same as the home page always has.
  const showHeader = pathname === "/users" || pathname === "/subscriptions" || pathname === "/rooms";
  // Pages without the header (everything but /users) sat flush against
  // the very top of the viewport once the header was made conditional,
  // so they get extra top padding here instead, applied to the shared
  // layout wrapper (not just <main>) so Sidebar shifts down with the
  // content column and stays aligned to it.

  return (
    <SearchProvider>
      <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
        {showHeader && <Header />}
        <div
          className="ff-layout"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: showHeader ? "0 16px" : "32px 16px 0",
            width: "100%",
            flex: 1,
          }}
        >
          <Sidebar />
          <main style={{ padding: "16px 0", minWidth: 0, flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<XCrossoverPage />} />
              <Route path="/subscriptions" element={<SubscriptionsPage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/magazine" element={<MagazinePage />} />
              <Route path="/magazine/google-reader" element={<GoogleReaderPage />} />
              <Route path="/magazine/friendfeed-1388" element={<FriendFeed88Page />} />
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
