import CategoryCard from "../components/movie/CategoryCard"

const Category = () => {
  return (
    <>
      <h1 className="nowrap-ellipsis">카테고리</h1>
      <div className="grid-auto-fill-250 gap-5 m-[2%]">
        <CategoryCard category={'now-playing'} />
        <CategoryCard category={'popular'} />
        <CategoryCard category={'top-rated'} />
        <CategoryCard category={'up-coming'} />
      </div>
    </>
  )
}

export default Category;