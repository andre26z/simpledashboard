// Important: We use `vi` from Vitest to mock modules
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import NovaAssinaturaPage from '~/pages/assinaturas/nova.vue'


const mockRouter = {
  push: vi.fn(), 
};

const mockToast = {
  showToast: vi.fn(),
};

vi.mock('vue-router', () => ({
  useRouter: () => mockRouter,
}));

vi.mock('~/composables/useToast', () => ({
  useToast: () => mockToast,
}));

// Mock global components used in the page
const Icon = { template: '<i></i>' };
const ToggleSwitch = {
  props: ['modelValue'],
  template: '<input type="checkbox" :checked="modelValue" @change="$emit(\'update:modelValue\', $event.target.checked)" />'
};

describe('pages/assinaturas/nova.vue', () => {
  

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('updates the currency formatted input correctly', async () => {
    const wrapper = mount(NovaAssinaturaPage, {
      global: { components: { Icon, ToggleSwitch } }
    });
    
   
    const amountInput = wrapper.find<HTMLInputElement>('#subscription-amount');


    await amountInput.setValue('12345');
    await amountInput.trigger('input');
    

    await nextTick();
    
  
    const actualValue = amountInput.element.value;
    
  
    expect(actualValue).toContain('R$');
    expect(actualValue).toContain('123,45');
    
  
    expect(actualValue).toMatch(/R\$\s*123,45/);
  });

  it('shows a toast and does not submit if required fields are empty', async () => {
    const wrapper = mount(NovaAssinaturaPage, {
      global: { components: { Icon, ToggleSwitch } }
    });


    await wrapper.find('form').trigger('submit.prevent');

    expect(mockToast.showToast).toHaveBeenCalledOnce();
    expect(mockToast.showToast).toHaveBeenCalledWith('Nome da assinatura e Valor são obrigatórios.');
    

    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  it('submits the form and redirects on success', async () => {

    vi.useFakeTimers();

 
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    ) as vi.Mock;

    const wrapper = mount(NovaAssinaturaPage, {
      global: { components: { Icon, ToggleSwitch } }
    });
    
   
    await wrapper.find('#subscription-name').setValue('Plano Pro');
    await wrapper.find('#subscription-amount').setValue('9999'); 

   
    await wrapper.find('form').trigger('submit.prevent');
    
   
    await vi.runOnlyPendingTimersAsync();


    expect(global.fetch).toHaveBeenCalledOnce();

  
    expect(mockToast.showToast).toHaveBeenCalledWith('Assinatura gerada');

  
    await vi.advanceTimersByTimeAsync(1500);

   
    expect(mockRouter.push).toHaveBeenCalledOnce();
    expect(mockRouter.push).toHaveBeenCalledWith('/');

 
    vi.useRealTimers();
  });
});