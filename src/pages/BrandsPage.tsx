import type { FC } from "react";
import { XListPage } from "./XListPage";
import raw from "../data/brands.json";
import type { XListRecord } from "../components/XListCell";

export const BrandsPage: FC = () => (
  <XListPage
    path="/brands"
    title="برندها در ایکس"
    noun="برند"
    items={raw as XListRecord[]}
    imageFolder="brands"
  />
);
