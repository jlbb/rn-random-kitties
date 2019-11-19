import { useDispatch, useSelector } from "react-redux";

import { CatItemsType, StateManagement, FetchRandomCatsType } from "../types";
import { setCatItems } from "../actions";
import axios from "axios";
import { CAT_API_KEY, CAT_API_URL } from "../../config/api";

type CatsApiHookType = [CatItemsType, FetchRandomCatsType];

const useCatsApi = (): CatsApiHookType => {
  const dispatch = useDispatch();
  const catItems: CatItemsType = useSelector(
    ({ app }: StateManagement) => app.catItems
  );

  const _randomCat = async (nCats: number): Promise<string> => {
    axios.defaults.headers.common["x-api-key"] = CAT_API_KEY; // Replace this with your API Key
    let res = await axios.get(CAT_API_URL, {
      params: { limit: nCats, size: "full" }
    });

    return res.data.map(cat => cat.url);
  };

  const _fetchCats: FetchRandomCatsType = async (nCats = 3) => {
    const items = await _randomCat(nCats);
    const resolved: CatItemsType = await Promise.all(items);

    return dispatch(setCatItems(resolved));
  };

  return [catItems, _fetchCats];
};

export default useCatsApi;
