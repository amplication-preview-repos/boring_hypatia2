import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnalyticsWhereInput = {
  id?: StringFilter;
  likes?: IntNullableFilter;
  postId?: StringNullableFilter;
  views?: IntNullableFilter;
};
