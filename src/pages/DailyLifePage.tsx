import type { FC } from "react";
import { XListPage } from "./XListPage";
import raw from "../data/daily_life.json";
import type { XListRecord } from "../components/XListCell";

export const DailyLifePage: FC = () => (
  <XListPage
    path="/daily-life"
    title="زندگی روزمره در ایکس"
    noun="حساب"
    items={raw as XListRecord[]}
    imageFolder="daily_life"
  />
);
