import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToggleSwitch from '~/components/ToggleSwitch.vue'

// `describe` groups related tests together
describe('ToggleSwitch.vue', () => {

  // `it` or `test` defines an individual test case
  it('renders in the "off" state when modelValue is false', () => {
    // 1. Mount the component with props
    const wrapper = mount(ToggleSwitch, {
      props: {
        modelValue: false,
      },
    });

    // 2. Assert the outcome
    // Check if the button has the correct class for the "off" state
    expect(wrapper.classes()).toContain('bg-gray-200');
    // Check if the inner span is not translated
    const span = wrapper.find('span');
    expect(span.classes()).toContain('translate-x-0');
  });

  it('renders in the "on" state when modelValue is true', () => {
    const wrapper = mount(ToggleSwitch, {
      props: {
        modelValue: true,
      },
    });

    // Check for the "on" state class
    expect(wrapper.classes()).toContain('bg-gray-700');
    // Check if the inner span is translated
    const span = wrapper.find('span');
    expect(span.classes()).toContain('translate-x-3');
  });

  it('emits an "update:modelValue" event with the new value when clicked', async () => {
    const wrapper = mount(ToggleSwitch, {
      props: {
        modelValue: false,
      },
    });

    // Simulate a user click on the button
    await wrapper.trigger('click');

    // Check if the correct event was emitted
    const emittedEvent = wrapper.emitted('update:modelValue');
    expect(emittedEvent).toBeDefined();
    // It should be an array of arrays, where each inner array contains the event payload
    expect(emittedEvent[0]).toEqual([true]); // from false to true

    // Now, let's test the other way around
    await wrapper.setProps({ modelValue: true }); // Update the prop
    await wrapper.trigger('click');

    // Check the new emitted event (it's the second one now)
    expect(wrapper.emitted('update:modelValue')[1]).toEqual([false]); // from true to false
  });
});