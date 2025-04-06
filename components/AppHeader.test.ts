import { mount } from "@vue/test-utils";
import AppHeader from "./AppHeader.vue";

describe("AppHeader", () => {
  it("should render the component correctly", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find(".header").exists()).toBe(true);
    expect(wrapper.find(".logo").exists()).toBe(true);
  });
});
