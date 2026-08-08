import type { FC } from "react";
import { XListPage } from "./XListPage";
import raw from "../data/embassies.json";
import type { XListRecord } from "../components/XListCell";

export const EmbassiesPage: FC = () => (
  <XListPage
    path="/embassies"
    title="سفارت‌ها در ایکس"
    noun="سفارت"
    items={raw as XListRecord[]}
  />
);
