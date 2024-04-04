import type { CollectionConfig } from 'payload/types'
import { canManage } from './canRead';

const Contributions: CollectionConfig = {
  slug: 'contributions',
  admin: {
    useAsTitle: 'name',
    group: 'Structure'
  },
  access: {
    read: canManage({tenancyInAnyProperty: ['contributor', 'subject']}),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'text',
      hasMany: true
    },
    {
      name: 'contributor', // required
      type: 'group', // required
      interfaceName: 'Party', // optional
      fields: [
        {
          name: 'organisation',
          type: 'relationship',
          relationTo: 'organisations',
          hasMany: false,
        },
        {
          name: 'partnership',
          type: 'relationship',
          relationTo: 'partnerships',
          hasMany: false,
        },
        {
          name: 'workspace',
          type: 'relationship',
          relationTo: 'workspaces',
          hasMany: false,
        },
        {
          name: 'activity',
          type: 'relationship',
          relationTo: 'activities',
          hasMany: false,
        }
      ],
    },
    {
      name: 'subject', // required
      type: 'group', // required
      fields: [
        {
          name: 'organisation',
          type: 'relationship',
          relationTo: 'organisations',
          hasMany: false,
        },
        {
          name: 'partnership',
          type: 'relationship',
          relationTo: 'partnerships',
          hasMany: false,
        },
        {
          name: 'counter',
          type: 'relationship',
          relationTo: 'counters',
          hasMany: false,
        },
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          hasMany: false,
        }
      ],
    },
  ],
}

export default Contributions
