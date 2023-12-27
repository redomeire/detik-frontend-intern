import { loadHTMLContent } from './utils/loadHTMLContent.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = loadHTMLContent()
