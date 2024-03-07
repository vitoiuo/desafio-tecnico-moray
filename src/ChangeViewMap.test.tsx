import { render, waitFor } from '@testing-library/react'
import { useMap } from 'react-leaflet'
import ChangeView from "./ChangeViewMap"

vi.mock('react-leaflet', () => ({ useMap: vi.fn()}))

describe("ChangeViewMap", () => {
  it("should render", async () => {
    const setView = vi.fn()
    const COMPONENT_PROPS = { center: [51.505, -0.09], zoom: 13 } 
    useMap.mockReturnValue({ setView })

    render(<ChangeView {...COMPONENT_PROPS} />)

    expect(setView).toHaveBeenCalledWith(...Object.values(COMPONENT_PROPS))
  })
})