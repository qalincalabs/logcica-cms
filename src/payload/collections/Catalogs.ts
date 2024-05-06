import type { CollectionConfig } from 'payload/types'
import categoriesField from '../fields/CategoriesField'
import { useEffect, useState } from 'react'
import ownerPartyField from '../fields/ownerPartyField'
import producerPartyField from '../fields/producerPartyField'
import quantityField from '../fields/quantityField'
import sellerPartyField from '../fields/sellerParty'
import { canManageOrContribute } from './canRead'
import productCategoriesField from '../fields/productCategoriesField'
import { group } from 'console'


const Catalogs: CollectionConfig = {
  slug: 'catalogs',
  labels: {
    singular: {
      en: 'Catalog',
      fr: 'Catalogue',
    },
    plural: {
      en: 'Catalogs',
      fr: 'Catalogues',
    },
  },
  versions: {
    drafts: false,
    maxPerDoc: 10
  },
  admin: {
    useAsTitle: 'description.short.markdown',
    group: 'Gestion',
  },
  access: {
    read: canManageOrContribute({placeInProperty: 'area', tenancyInAnyProperty: ['seller']}),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'type',
      type: 'text',
    },
    {
      name: 'description',
      type: 'group',
      fields: [
        {
          name: 'short',
          type: 'group',
          fields: [
            {
              name: 'markdown',
              type: 'text'
            }
          ]
        }
      ]
    },
    sellerPartyField,
    {
      name: 'area',
      type: 'relationship',
      relationTo: 'places',
      hasMany: false,
    },
    productCategoriesField
  ],
}

export default Catalogs
