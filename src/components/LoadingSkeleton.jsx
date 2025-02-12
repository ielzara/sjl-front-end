import React from 'react';
import PropTypes from 'prop-types';

const ArticleCardSkeleton = () => (
  <article className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm h-full p-4 relative">
    <div className="flow-root h-full pb-12">
      <div className="float-left w-[280px] bg-gray-200 mr-4 mb-3 h-auto object-contain rounded-lg animate-pulse" style={{ aspectRatio: '16/9' }} />
      
      <div>
        <div className="text-lg font-bold mb-2 font-serif text-gray-900">
          <div className="h-7 bg-gray-200 rounded w-3/4 animate-pulse" />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-2 text-gray-500 text-xs">
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
          <div className="h-5 bg-indigo-100 rounded-full w-16 animate-pulse" />
        </div>

        <div className="text-gray-600 text-sm leading-relaxed">
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-4 left-4">
      <div className="h-[34px] w-[90px] bg-gray-200 rounded animate-pulse" />
    </div>
  </article>
);

const BookCardSkeleton = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-3 flex flex-col h-full">
    <div className="w-full aspect-[2/3] bg-gray-200 rounded animate-pulse mb-3" />
    <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse mb-2" />
    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mb-3" />
    <div className="space-y-2 flex-grow">
      <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
    </div>
    <div className="h-8 bg-gray-200 rounded w-full mt-3 animate-pulse" />
  </div>
);

const ArticleListSkeleton = () => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 auto-rows-fr mb-8">
    {[1, 2, 3, 4].map((i) => (
      <ArticleCardSkeleton key={i} />
    ))}
  </div>
);

const ArticlePageSkeleton = () => (
  <div className="max-w-[90%] my-8 mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-[6fr_3fr] lg:grid-cols-[5fr_3fr] gap-8">
      <div>
        <article className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm p-4">
          <div className="text-xl md:text-3xl font-bold mb-2 font-serif text-gray-900">
            <div className="h-8 md:h-10 bg-gray-200 rounded w-3/4 animate-pulse" />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 mb-2 text-gray-500 text-xs">
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
          </div>

          <div className="w-full md:w-[70%] mx-auto my-4 md:my-8">
            <div className="w-full aspect-[16/9] bg-gray-200 animate-pulse rounded-lg" />
            <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2 px-2 md:px-4">
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
            </div>
          </div>

          <div className="text-gray-600 text-sm md:text-base leading-relaxed">
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 md:h-5 bg-gray-200 rounded w-full animate-pulse" />
                  <div className="h-4 md:h-5 bg-gray-200 rounded w-full animate-pulse" />
                  <div className="h-4 md:h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>

      <aside className="bg-white rounded-lg border border-gray-200 p-4 h-fit">
        <h2 className="text-xl font-bold mb-4 font-merriweather text-gray-900 text-center">
          <div className="h-7 bg-gray-200 rounded w-48 mx-auto animate-pulse" />
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <BookCardSkeleton key={i} />
          ))}
        </div>
      </aside>
    </div>
  </div>
);

const LoadingSkeleton = ({ type = 'list' }) => {
  return type === 'list' ? <ArticleListSkeleton /> : <ArticlePageSkeleton />;
};

LoadingSkeleton.propTypes = {
  type: PropTypes.oneOf(['list', 'article'])
};

export default LoadingSkeleton;