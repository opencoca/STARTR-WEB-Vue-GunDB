import { mount } from "@vue/test-utils";
import HelloWorld from "../src/components/HelloWorld.vue";

// a user can add a recipe

describe("Recipes Components", () => {
  test("a recipe can be created", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("a recipe can be read", () => {});

  test("a recipe can be updated", () => {});

  test("a recipe can be deleted", () => {});
});
