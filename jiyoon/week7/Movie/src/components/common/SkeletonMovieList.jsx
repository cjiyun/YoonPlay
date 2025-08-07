import SkeletonGrid from '@/components/common/SkeletonGrid';
import PropTypes from 'prop-types';
import withDeferred from '@/utils/withDeferred';

const SkeletonMovieList = ({ count = 10, className }) => {
  return (
    <>
      <SkeletonGrid count={count} className={className}>
        {() => (
          <div className="space-y-1.5">
            <div className="animate-skeleton aspect-[2/3] w-full place-self-center"></div>
            <div className="animate-skeleton h-2 w-full"></div>
            <div className="animate-skeleton h-2 w-full"></div>
          </div>
        )}
      </SkeletonGrid>
    </>
  );
};

SkeletonMovieList.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
};

export default withDeferred(SkeletonMovieList);
