import type { FC } from "react";
import { XListPage } from "./XListPage";
import raw from "../data/books.json";
import type { XListRecord } from "../components/XListCell";

export const BooksPage: FC = () => (
  <XListPage
    path="/books"
    title="کتاب‌ها در ایکس"
    noun="کتاب"
    items={raw as XListRecord[]}
    imageFolder="books"
  />
);
