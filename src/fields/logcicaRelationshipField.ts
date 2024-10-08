import type { Field, FilterOptions } from 'payload/types'
import deepMerge from '../utilities/deepMerge'
import { Types } from 'mongoose'
import { getLabelTranslations } from '../utilities/translate'

type LogcicaRelationshipType = (options?: {
  name?: string
  nameSingular?: string
  relationTo?: string
  position?: 'sidebar'
  filterOptions?: FilterOptions
  hasMany?: boolean
  type?: 'relationship' | 'upload'
  overrides?: Record<string, unknown>
}) => Field[]

export function newForeignKeyField(name: string): Field {
  const foreignKeyField: Field = {
    name: name + 'Id',
    type: 'json',
    hooks: {
      beforeChange: [
        ({ siblingData }) => {
          if (!siblingData[name]) return siblingData[name]
          return new Types.ObjectId(siblingData[name])
        },
      ],
    },
    admin: {
      hidden: true,
    },
  }

  return foreignKeyField
}

export function newArrayForeignKeyField(name: string, singularName: string): Field {
  const foreignKeyField: Field = {
    name: singularName + 'Ids',
    type: 'json',
    hooks: {
      beforeChange: [
        ({ siblingData }) => {
          if (!siblingData[name]) return siblingData[name]
          return siblingData[name].map(i => new Types.ObjectId(i))
        },
      ],
    },
    admin: {
      hidden: true,
    },
  }

  return foreignKeyField
}

const logcicaRelationshipField: LogcicaRelationshipType = ({
  name,
  nameSingular,
  relationTo,
  position,
  filterOptions,
  hasMany,
  type,
  overrides = {},
}) => {
  let foreignKeyField = {} as Field

  if (hasMany) foreignKeyField = newArrayForeignKeyField(name, nameSingular)
  else foreignKeyField = newForeignKeyField(name)

  const relationshipBaseField = {
    name: name,
    label: getLabelTranslations(name),
    relationTo: relationTo,
    filterOptions: filterOptions,
    admin: {
      position: position,
    },
  }

  let relationshipField = {
    ...relationshipBaseField,
    hasMany: hasMany ? true : false,
    type: 'relationship',
  } as Field

  if (type == 'upload') {
    relationshipField = {
      ...relationshipBaseField,
      type: 'upload',
    } as Field
  }

  return [deepMerge(foreignKeyField, overrides), deepMerge(relationshipField, overrides)]
}

export default logcicaRelationshipField
