import PropTypes from 'prop-types';

const SkeletonGrid = ({ count = 10, children, className }) => {
  return Array.from({ length: count }).map((_, idx) => (
    <div key={idx} className={className}>
      {typeof children === 'function' ? children(idx) : children}
    </div>
  ));
};

SkeletonGrid.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
};

export default SkeletonGrid;
