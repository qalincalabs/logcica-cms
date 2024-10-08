import type { CollectionConfig } from 'payload/types'
import CustomLinkCell from '../fields/CustomLinkCell'
import { cannotConfigure } from './canRead'
import nameField from '../fields/nameField'
import { getCollectionLabelsTranslations, getLabelTranslations } from '../utilities/translate'
import logcicaRelationshipField from '../fields/logcicaRelationshipField'

const KnowledgeBases: CollectionConfig = {
  slug: 'knowledge_bases',
  labels: getCollectionLabelsTranslations('knowledge_bases'),
  admin: {
    useAsTitle: 'name',
    group: 'Référencement',
    hidden: cannotConfigure,
  },
  access: {
    read: () => true,
  },
  fields: [
    nameField,
    {
      name: 'type',
      type: 'text',
      label: getLabelTranslations('type'),
    },
    {
      name: 'link',
      type: 'text',
      label: getLabelTranslations('link'),
      admin: {
        components: {
          Cell: CustomLinkCell,
        },
      },
    },
    ...logcicaRelationshipField({
      name: 'area',
      relationTo: 'places',
    }),
  ],
}

export default KnowledgeBases
