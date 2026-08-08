import type { FC } from "react";
import { XListPage } from "./XListPage";
import raw from "../data/orgs.json";
import type { XListRecord } from "../components/XListCell";

export const OrgsPage: FC = () => (
  <XListPage
    path="/orgs"
    title="ادارات و سازمان‌ها در ایکس"
    noun="سازمان"
    items={raw as XListRecord[]}
  />
);
