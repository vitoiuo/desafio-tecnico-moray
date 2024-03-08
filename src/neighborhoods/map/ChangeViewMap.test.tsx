import { render } from '@testing-library/react'
import ChangeView, { ChangeViewProps } from "./ChangeViewMap"

const { setView } = vi.hoisted(() => {
  return { setView: vi.fn() }
})
vi.mock('react-leaflet', () => (
  { useMap: vi.fn().mockReturnValue({ setView })}
))

describe('ChangeViewMap', () => {
  it('should render', async () => {
    const COMPONENT_PROPS: ChangeViewProps = { center: [51.505, -0.09], zoom: 13 } 

    render(<ChangeView {...COMPONENT_PROPS} />)

    expect(setView).toHaveBeenCalledWith(...Object.values(COMPONENT_PROPS))
  })
})