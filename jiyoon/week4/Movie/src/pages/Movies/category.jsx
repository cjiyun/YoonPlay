import CategoryCard from "../../components/cat-card"
import '../../css/category.css'

const Category = () => {
  return (
    <>
      <h1 className="cat-header">카테고리</h1>
      <div className="cat-container">
        <CategoryCard category={'now-playing'} />
        <CategoryCard category={'popular'} />
        <CategoryCard category={'top-rated'} />
        <CategoryCard category={'up-coming'} />
      </div>
    </>
  )
}

export default Category;