import { useContext } from "react";
import { SidebarDrawerContext } from "../contexts/SidebarDrawerContext";

export function useSidebarDrawer() {
  const context = useContext(SidebarDrawerContext);

  return context;
}
