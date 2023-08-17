import { IPricingPlansModule } from '@/types';
import PricingPlan from './pricing-plan.component';

export default function PricingPlanModule({ plans }: IPricingPlansModule) {
  return (
    <section className="mb-20 mt-12 md:mb-[100px] md:mt-16 xl:mb-24 xl:mt-[4.5rem]">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-6 md:flex-row md:gap-[10px] xl:gap-[30px] xl:px-0">
        {plans?.map(({ _id, cost, name, options, desc }) => (
          <PricingPlan
            cost={cost}
            key={_id}
            name={name}
            options={options}
            desc={desc}
          />
        ))}
      </div>
    </section>
  );
}
