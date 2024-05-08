import { blocks } from "./blocks"
import { examples } from "./examples"
import { Registry } from "./schema"
import { ui } from "./ui"

export const registry: Registry = [...ui, ...examples, ...blocks]
