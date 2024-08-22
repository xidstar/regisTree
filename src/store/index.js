import { proxy } from "valtio";

const state = proxy({
  isLoading: true,
  isMenuOpen: false,
});

export default state;