import type { CollectionConfig } from 'payload/types'
import { cannotConfigure } from './canRead'
import nameField from '../fields/nameField'
import { getCollectionLabelsTranslations, getLabelTranslations } from '../utilities/translate'
import logcicaRelationshipField from '../fields/logcicaRelationshipField'

const Classifications: CollectionConfig = {
  slug: 'classifications',
  labels: getCollectionLabelsTranslations('classifications'),
  admin: {
    useAsTitle: 'name',
    group: 'Configuration',
    hidden: cannotConfigure,
    defaultColumns: ['name', 'key', 'system', 'subject'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'key',
          type: 'text',
          label: getLabelTranslations('key'),
        },
        nameField,
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'subject',
          type: 'text',
          label: getLabelTranslations('subject'),
        },
        ...logcicaRelationshipField({
          name: 'system',
          relationTo: 'information_systems',
        }),
      ],
    },
  ],
}

export default Classifications
