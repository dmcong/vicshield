interface IPackageFeature {
  id: number
  title: string
  checked: boolean
}

interface IPackagePricing {
  price: number
  description: string
}

interface IPackage {
  id: number
  title: string
  features: IPackageFeature[]
  pricing?: IPackagePricing | null
}

export const PRICE_PACKAGES: IPackage[] = [
  {
    id: 1,
    title: 'Starter Plan',
    features: [
      {
        id: 1,
        title: 'Singer User',
        checked: true,
      },
      {
        id: 2,
        title: 'Free Signatures',
        checked: true,
      },
      {
        id: 3,
        title: 'Support from community',
        checked: true,
      },
      {
        id: 4,
        title: 'No storage or Integrations',
        checked: false,
      },
      {
        id: 5,
        title: 'No reports & analytics',
        checked: false,
      },
    ],
    pricing: {
      price: 29,
      description: 'Great for Individuals',
    },
  },
  {
    id: 2,
    title: 'Business Plan',
    features: [
      {
        id: 1,
        title: 'Up to 50 users',
        checked: true,
      },
      {
        id: 2,
        title: 'Free Signatures',
        checked: true,
      },
      {
        id: 3,
        title: 'Support from helpdesk',
        checked: true,
      },
      {
        id: 4,
        title: 'Organizational Features',
        checked: true,
      },
      {
        id: 5,
        title: '3rd-party integration',
        checked: true,
      },
      {
        id: 6,
        title: 'Storage or Integrations',
        checked: true,
      },
      {
        id: 7,
        title: 'Reports & analytics',
        checked: true,
      },
    ],
    pricing: {
      price: 299,
      description: 'Great for Business',
    },
  },
  {
    id: 3,
    title: 'Custom Plan',
    features: [
      {
        id: 1,
        title: 'Unlimited users',
        checked: true,
      },
      {
        id: 2,
        title: 'Free Signatures',
        checked: true,
      },
      {
        id: 3,
        title: 'Dedicated support',
        checked: true,
      },
      {
        id: 4,
        title: 'Organizational Features',
        checked: true,
      },
      {
        id: 5,
        title: '3rd-party integration',
        checked: true,
      },
      {
        id: 6,
        title: 'Storage or Integrations',
        checked: true,
      },
      {
        id: 7,
        title: 'Reports & analytics',
        checked: true,
      },
      {
        id: 8,
        title: 'White-label configuration',
        checked: true,
      },
      {
        id: 9,
        title: 'Tailor-made approval layers',
        checked: true,
      },
    ],
    pricing: null,
  },
]
