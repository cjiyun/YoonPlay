import CategoryCard from '../components/category/CategoryCard.jsx';

const Category = () => {
  return (
    <>
      <h1 className="truncate">카테고리</h1>
      <div className="grid-auto-fill-250 m-[2%] gap-5">
        <CategoryCard category={'now-playing'} />
        <CategoryCard category={'popular'} />
        <CategoryCard category={'top-rated'} />
        <CategoryCard category={'up-coming'} />
      </div>
    </>
  );
};

export default Category;
