import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import store from "../redux/store";

// Redux ile typescript yazdığımız için tanımlanması gerekenler:
export type RootState = ReturnType<typeof store.getState>;

// Store abone olmak için kullancığımız tipi tanımlanmış useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// app distpatch tipi tanımla
export type AppDispatch = typeof store.dispatch;

// aksiyon tetiklemek için useDispatch yerine kullanılacak tipi tanımlanmış hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
