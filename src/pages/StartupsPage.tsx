import type { FC } from "react";
import { XListPage } from "./XListPage";
import raw from "../data/startups.json";
import type { XListRecord } from "../components/XListCell";

export const StartupsPage: FC = () => (
  <XListPage
    path="/startups"
    title="استارت‌آپ‌ها در ایکس"
    noun="استارت‌آپ"
    items={raw as XListRecord[]}
  />
);
