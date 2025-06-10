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

    await wrapper.trigger('click');


    const emittedEvent = wrapper.emitted('update:modelValue');
    expect(emittedEvent).toBeDefined();
    expect(emittedEvent[0]).toEqual([true]);


    await wrapper.setProps({ modelValue: true }); 
    await wrapper.trigger('click');

    expect(wrapper.emitted('update:modelValue')[1]).toEqual([false]); 
  });
});