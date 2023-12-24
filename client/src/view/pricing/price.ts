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
        title: 'Unlimited Access',
        checked: true,
      },
      {
        id: 4,
        title: 'No storage or Integrations',
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
        title: 'Unlimited Access',
        checked: true,
      },
      {
        id: 4,
        title: 'Storage or Integrations',
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
    title: 'Custom',
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
        title: 'Unlimited Access',
        checked: true,
      },
      {
        id: 4,
        title: 'Storage or Integrations',
        checked: true,
      },
    ],
    pricing: null,
  },
]
