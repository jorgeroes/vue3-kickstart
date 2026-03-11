import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '@/components/base/BaseButton.vue'

describe('BaseButton', () => {
  it('renderiza correctamente con texto', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toBe('Click me')
  })

  it('emite evento click cuando se hace click', async () => {
    const wrapper = mount(BaseButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('no emite evento click cuando está deshabilitado', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('aplica la clase correcta según la variante', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('bg-blue-600')
  })

  it('aplica la clase correcta según el tamaño', () => {
    const wrapper = mount(BaseButton, {
      props: {
        size: 'lg',
      },
    })
    expect(wrapper.classes()).toContain('px-6')
  })
})
