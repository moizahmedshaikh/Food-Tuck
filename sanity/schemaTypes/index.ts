import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import chefs from './chefs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods,chefs],
}
