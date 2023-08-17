export default function CTAForm() {
  return (
    <div className="space-y-4 md:relative md:mx-auto md:w-full md:max-w-md md:space-y-0 xl:mx-[unset]">
      <input
        type="email"
        placeholder="Enter email address"
        className="w-full rounded-3xl bg-link-water-white px-7 py-3 text-[15px] font-bold text-mirage-blue shadow-[10px_10px_25px_-10px_rgba(54,_83,_107,_0.25)] placeholder:text-mirage-blue placeholder:text-opacity-50 md:pr-44"
      />
      <button
        type="button"
        className="button button--primary w-full md:absolute md:right-0 md:w-auto"
      >
        Schedule a Demo
      </button>
    </div>
  );
}
