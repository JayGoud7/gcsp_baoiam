import React from "react";
// import { industry, interestedCheckbox } from "../../Data";

const ContactForm = () => {
  return (
    <div className="mt-20 w-[70%] p-4 mx-auto h-full xs:w-full xs:p-4 xs:mt-10 xs:h-full xs:py-24">
      <h1 className="text-5xl font-semibold xs:text-3xl xs:text-center">
        Contact
      </h1>

      <form
        action=""
        className="w-full h-full py-4 flex flex-col gap-4 text-black xs:flex xs:flex-col xs:gap-4 "
      >
        {/* Name */}
        <div className="flex flex-col w-full xs:flex-col">
          <p className="text-lg font-medium xs:text-base">
            Name <span className="text-red-600">*</span>
          </p>
          <div className="flex items-center justify-between gap-8 w-full xs:flex-col xs:gap-4 xs:w-full">
            <div className="w-1/2 flex flex-col xs:w-full">
              <input
                type="text"
                id="first"
                className="px-4 py-2 border border-black/60 w-full xs:py-1"
                required
              />
              <label htmlFor="first" className="text-sm xs:text-xs">
                First
              </label>
            </div>
            <div className="w-1/2 flex flex-col xs:w-full">
              <input
                type="text"
                id="last"
                className="px-4 py-2 border border-black/60 w-full xs:py-1"
                required
              />
              <label htmlFor="last" className="text-sm xs:text-xs">
                Last
              </label>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="flex gap-8 w-full xs:flex-col xs:gap-4">
          <div className="flex-col flex w-1/2 xs:w-full">
            <label
              className="text-lg font-medium xs:text-base"
              htmlFor="company"
            >
              Company <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="company"
              className="px-4 py-2 border border-black/60 w-full xs:py-1"
              required
            />
            <span className="text-sm xs:text-xs">Who do you work for?</span>
          </div>

          <div className="flex-col flex w-1/2 xs:w-full">
            <label
              className="text-lg font-medium xs:text-base"
              htmlFor="agency"
            >
              Company represented (if agency)
            </label>
            <input
              type="text"
              id="agency"
              className="px-4 py-2 border border-black/60 w-full xs:py-1"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex gap-8 w-full xs:flex-col xs:gap-4">
          <div className="flex-col flex w-1/2 xs:w-full">
            <label className="text-lg font-medium xs:text-base" htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 border border-black/60 w-full xs:py-1"
              required
            />
          </div>

          <div className="flex-col flex w-1/2 xs:w-full">
            <label className="text-lg font-medium xs:text-base" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              inputMode="numeric"
              maxLength={10}
              className="px-4 py-2 border border-black/60 w-full xs:py-1"
            />
          </div>
        </div>

        {/* Job & Industry */}
        <div className="flex gap-8 w-full xs:flex-col xs:gap-4">
          <div className="flex-col flex w-1/2 xs:w-full">
            <label className="text-lg font-medium xs:text-base" htmlFor="job">
              Job Title
            </label>
            <input
              type="text"
              id="job"
              className="px-4 py-2 border border-black/60 w-full xs:py-1"
            />
          </div>

          <div className="flex-col flex w-1/2 xs:w-full">
            <label
              className="text-lg font-medium xs:text-base"
              htmlFor="industry"
            >
              Industry
            </label>
            <select
              name=""
              id="industry"
              className="px-4 py-2 border border-black/60 w-full xs:py-1"
            >
              <option value="">Select an Industry</option>
              {/* {industry.map((i) => (
                <option key={i.id} value={i.value}>
                  {i.label}
                </option>
              ))} */}
            </select>
          </div>
        </div>

        {/* Interested */}
        <div className="w-full xs:w-full">
          <p className="text-lg font-medium xs:text-base">
            I am interested in... <span className="text-red-600">*</span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2 xs:grid-cols-1 xs:gap-2">
            {/* {interestedCheckbox.map((c) => (
              <div key={c.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={c.value}
                  name={c.value}
                  value={c.value}
                  required
                />
                <label className="ml-2 xs:text-sm" htmlFor={c.value}>
                  {c.label}
                </label>
              </div>
            ))} */}
          </div>
        </div>

        {/* Textarea */}
        <div className="w-full xs:w-full">
          <label className="text-lg font-medium xs:text-base" htmlFor="help">
            How can we help?
          </label>
          <textarea
            rows={4}
            id="help"
            className="px-4 py-2 border border-black/60 w-full mt-2 xs:py-1 xs:mt-2"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 mt-4 uppercase rounded-full bg-black text-white xs:px-4 xs:py-2 xs:mt-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
