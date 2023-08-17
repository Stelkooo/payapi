import Image from 'next/image';

import { TPlanOption } from '@/types';

import IconCheck from '@/public/assets/icon-check.svg';

export default function PlanOptions({ options }: { options?: TPlanOption[] }) {
  return (
    <div className="grid place-content-center border-y border-y-mirage-blue border-opacity-25 py-6 xl:place-content-start">
      <div className="flex flex-col gap-2">
        {options?.map(({ _key, isIncluded, title }) => (
          <div key={_key} className="flex items-center gap-6">
            <span>
              <Image
                src={IconCheck}
                alt={`${
                  isIncluded
                    ? 'Option is included in plan'
                    : 'Option is not included in plan'
                } `}
                className={`${isIncluded ? 'visible' : 'invisible'} `}
              />
            </span>
            <p
              className={`${
                isIncluded ? '' : 'text-opacity-50'
              } text-base/7 text-mirage-blue`}
            >
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
