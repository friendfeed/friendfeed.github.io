import type { FC } from "react";
import { XListPage } from "./XListPage";
import raw from "../data/news.json";
import type { XListRecord } from "../components/XListCell";

export const NewsPage: FC = () => (
  <XListPage
    path="/news"
    title="خبرگزاری‌ها در ایکس"
    noun="خبرگزاری"
    items={raw as XListRecord[]}
  />
);
