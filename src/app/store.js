import { configureStore } from "@reduxjs/toolkit";

import { crytoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [crytoApi.reducerPath]: crytoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    }
});