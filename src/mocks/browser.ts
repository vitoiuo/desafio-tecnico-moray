import { setupWorker } from 'msw/browser'
import { RequestHandler } from 'msw'
import { handlers } from './handlers'
import { scenarios } from './scenarios'

const scenarioName = new URLSearchParams(window.location.search).get('scenario')
let runtimeScenarios: RequestHandler[] = []
if (scenarioName) {
  runtimeScenarios = scenarios[scenarioName as keyof typeof scenarios]
}

export const worker = setupWorker(...runtimeScenarios, ...handlers)
