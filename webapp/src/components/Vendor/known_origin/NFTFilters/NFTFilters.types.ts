import { Section, SortBy } from '../../../../modules/routing/types'
import { browse } from '../../../../modules/routing/actions'

export type Props = {
  section: Section
  sortBy?: SortBy
  onlyOnSale?: boolean
  onBrowse: typeof browse
}

export type MapStateProps = Pick<Props, 'section' | 'sortBy' | 'onlyOnSale'>
export type OwnProps = Pick<Props, 'onBrowse'>
