import type { StatisticsSectionData } from './StatisticsSection/types'

export const statisticsSectionData: StatisticsSectionData = {
  eyebrow: 'Statistics',
  title: 'More than premium abstract imagery',
  description:
    'Our platform is more than just as a service to us - it is a catalyst for enriching lives through premium abstract imagery.',
  statistics: {
    subheader: 'Our mission, in numbers',
    imageAlt: 'White abstract geometric blocks on a neutral background',
    statusText: {
      loading: 'Loading...',
      error: 'An error occured while getting statistics',
      empty: 'No data found',
    },
    metricLabels: {
      downloads: 'Downloads',
      paid_users: 'Paid users',
      library_images: 'Images in library',
    },
  },
}
