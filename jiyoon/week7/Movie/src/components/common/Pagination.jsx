import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import PropTypes from 'prop-types';
import PageButton from '@/components/common/PageButton.jsx';

const Pagination = ({ page, totalPages, hasMore, isPlaceholderData, onPrev, onNext }) => {
  const prevDisabled = page <= 1;
  const nextDisabled = isPlaceholderData || !hasMore;

  return (
    <div className="flex items-center justify-center space-x-4 pt-8">
      <PageButton onClick={onPrev} disabled={prevDisabled} Icon={<BiChevronLeft size={20} />} />
      <span className="text-sm">
        {page} / {totalPages}
      </span>
      <PageButton onClick={onNext} disabled={nextDisabled} Icon={<BiChevronRight size={20} />} />
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  hasMore: PropTypes.bool.isRequired,
  isPlaceholderData: PropTypes.bool.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Pagination;
