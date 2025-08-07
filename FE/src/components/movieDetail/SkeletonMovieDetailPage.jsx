import SkeletonGrid from '@/components/common/SkeletonGrid';
import withDeferred from '@/utils/withDeferred';

const SkeletonMovieDetailsPage = () => {
  return (
    <div>
      <div className="animate-skeleton h-[40vh]"></div>
      <div className="animate-skeleton my-2.5 h-9 max-w-28"></div>
      <div className="grid-auto-fill-110 gap-5">
        <SkeletonGrid>
          {() => (
            <div className="m-[2%] flex flex-col items-center gap-2">
              <div className="animate-skeleton aspect-square w-full !rounded-full"></div>
              <div className="animate-skeleton h-2 w-3/4"></div>
              <div className="animate-skeleton h-2 w-2/3"></div>
            </div>
          )}
        </SkeletonGrid>
      </div>
    </div>
  );
};

export default withDeferred(SkeletonMovieDetailsPage);
