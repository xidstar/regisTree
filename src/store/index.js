import { proxy } from "valtio";

const state = proxy({
  isLoading: true,
  isMenuOpen: false,
  isMission: false,
});

export default state;