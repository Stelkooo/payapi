import Link from 'next/link';

import { TPlan } from '@/types';
import PlanOptions from './plan-options.component';

export default function PricingPlan({ cost, name, desc, options }: TPlan) {
  return (
    <div>
      <h3 className="h3--large mb-4 text-center text-dark-pink md:mb-3 xl:mb-4 xl:text-left">
        {name} Plan
      </h3>
      <p className="mb-2 text-center text-light-san-juan-blue md:mb-5 xl:mb-2 xl:text-left">
        {desc}
      </p>
      <p className="mb-6 text-center font-serif text-[56px]/[72px] tracking-[-0.431px] text-mirage-blue md:mb-5 xl:mb-6 xl:text-left">
        ${cost}.00
      </p>
      <PlanOptions options={options} />
      <Link
        href="/contact"
        className="button button--secondary button--secondary-dark mx-auto mt-6 block w-fit xl:ml-0"
      >
        Request Access
      </Link>
    </div>
  );
}
