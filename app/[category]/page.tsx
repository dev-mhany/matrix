import CategoryPage from '../components/pages/CategoryPage'

interface CategoryParams {
  params: {
    category: string
  }
}

export default function DynamicCategoryPage({ params }: CategoryParams) {
  return <CategoryPage slug={params.category} />
}

