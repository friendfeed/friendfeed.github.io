import type { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { BottomNav } from "./components/BottomNav";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { XCrossoverPage } from "./pages/XCrossoverPage";
import { XPodcastsPage } from "./pages/XPodcastsPage";
import { FaqPage } from "./pages/FaqPage";
import { MagazinePage } from "./pages/MagazinePage";
import { GoogleReaderPage } from "./pages/GoogleReaderPage";
import { FriendFeed88Page } from "./pages/FriendFeed88Page";
import { FriendFeedStoryPage } from "./pages/FriendFeedStoryPage";
import { SubscriptionsPage } from "./pages/SubscriptionsPage";
import { RoomsPage } from "./pages/RoomsPage";
import { SearchProvider } from "./services/SearchContext";
import { BrandsPage } from "./pages/BrandsPage";
import { NewsPage } from "./pages/NewsPage";
import { StartupsPage } from "./pages/StartupsPage";
import { OrgsPage } from "./pages/OrgsPage";
import { BooksPage } from "./pages/BooksPage";
import { DailyLifePage } from "./pages/DailyLifePage";
import { EmbassiesPage } from "./pages/EmbassiesPage";
import { FerferLeaksPage } from "./pages/FerferLeaksPage";

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
  // browsing/searching a directory list, so it renders on all four
  // directory pages -- /users (X-crossover), /subscriptions (all
  // FriendFeed members), /rooms, and /podcasts -- which is what makes
  // them read as the same site instead of different designs. Every
  // other page (home, faq, magazine, google-reader, ...) starts flush
  // at the top with no header above it, same as the home page always
  // has.
  //
  // Trailing slash is stripped before comparing: the static shells
  // generate-static-routes.mjs writes for these routes live at
  // dist/users/index.html etc, so a direct load or a hard refresh of
  // e.g. /users/ lands with pathname "/users/" (trailing slash), not
  // "/users" -- an exact match against the no-slash form used to fail
  // that case and silently drop the header/search bar. Comparing
  // against the trimmed pathname makes both forms match.
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const showHeader =
    normalizedPath === "/users" ||
    normalizedPath === "/subscriptions" ||
    normalizedPath === "/rooms" ||
    normalizedPath === "/podcasts" ||
    normalizedPath === "/brands" ||
    normalizedPath === "/news" ||
    normalizedPath === "/startups" ||
    normalizedPath === "/orgs" ||
    normalizedPath === "/books" ||
    normalizedPath === "/daily-life" ||
    normalizedPath === "/embassies";
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
              <Route path="/podcasts" element={<XPodcastsPage />} />
              <Route path="/subscriptions" element={<SubscriptionsPage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/magazine" element={<MagazinePage />} />
              <Route path="/magazine/dastan-khane-friendfeed" element={<FriendFeedStoryPage />} />
              <Route path="/magazine/google-reader" element={<GoogleReaderPage />} />
              <Route path="/magazine/friendfeed-1388" element={<FriendFeed88Page />} />
              <Route path="/magazine/ferferleaks" element={<FerferLeaksPage />} />
              <Route path="/brands" element={<BrandsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/startups" element={<StartupsPage />} />
              <Route path="/orgs" element={<OrgsPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/daily-life" element={<DailyLifePage />} />
              <Route path="/embassies" element={<EmbassiesPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
      {/* Mobile app tab bar. CSS-only visibility (see .ff-bottom-nav in
          tokens.css) -- hidden above the 680px breakpoint, where
          <Sidebar> is the nav instead. */}
      <BottomNav />
    </SearchProvider>
  );
};

export default App;
