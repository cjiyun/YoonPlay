import CategoryCard from "../components/cat-card"
import '../css/category.css'

const Category = () => {
  return (
    <>
      <h1 className="Header">카테고리</h1>
      <div className="catContainer">
        <CategoryCard category={'now-playing'} />
        <CategoryCard category={'popular'} />
        <CategoryCard category={'top-rated'} />
        <CategoryCard category={'up-coming'} />
      </div>
    </>
  )
}

export default Category;