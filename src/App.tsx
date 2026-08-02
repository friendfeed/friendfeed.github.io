import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { XCrossoverPage } from "./pages/XCrossoverPage";
import { SearchProvider } from "./services/SearchContext";

// HomePage / ProfilePage / PyramidPage / HistoryPage exist in ./pages but
// are intentionally not routed yet -- current scope is the X-crossover
// tab only, per instruction. They'll come back online once the archive
// and pyramid data passes are done.

const App: FC = () => (
  <SearchProvider>
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: 16, width: "100%", flex: 1 }}>
        <Routes>
          <Route path="/" element={<XCrossoverPage />} />
        </Routes>
      </main>
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
  </SearchProvider>
);

export default App;
