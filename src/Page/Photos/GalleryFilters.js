import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, getCategoriesState } from '../../ducks/categories';

const GalleryFilters = ({ currentCategory, onSetFilter }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => getCategoriesState(state)?.data);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (!categories) {
    return null;
  }

  const categoryList = [
    {
      id: '',
      name: 'All photos',
    },
    ...categories.filter((category) => category.name !== 'Uncategorized'),
  ];

  return (
    <div className="gallery-categories">
      {categoryList.map((category) => (
        <div
          key={category.id}
          className={`category ${
            category.id === currentCategory ? 'category--active' : ''
          }`}
        >
          <button
            className={`button button--secondary ${
              category.id === currentCategory ? 'button--active' : ''
            }`}
            onClick={() => onSetFilter(category.id)}
            disabled={category.id === currentCategory}
          >
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GalleryFilters;
