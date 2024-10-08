import React from "react";

function ChangePasscode() {
  return (
    <>
      <div className="  h-auto w-1/2 rounded-3xl bg-slate-800 shadow-2xl flex flex-col items-center">
        <div className="text-slate-100 font-bold text-2xl  mt-16">
          Change Passcode
        </div>

        <form onSubmit={submitForm} className="m-5 flex flex-col">
          <label htmlFor="passcode" className="text-slate-500 mb-1">
            Enter old passcode:
          </label>
          <input
            type="number"
            max="99999"
            name="oldPasscode"
            placeholder="Enter old passcode"
            id="passcode"
            required
            className="h-10 w-60 text-center rounded-lg mb-5 shadow-xl"
          />
          <input
            type="number"
            max="99999"
            name="passcode"
            placeholder="Enter passcode"
            id="passcode"
            required
            className="h-10 w-60 text-center rounded-lg mb-5 shadow-xl"
          />

          <label htmlFor="confirmPasscode" className="text-slate-500 mb-1">
            Re-enter a passcode:
          </label>
          <input
            type="number"
            max="99999"
            name="checkPasscode"
            placeholder="Re-enter passcode"
            id="confirmPasscode"
            required
            className="h-10 w-60 text-center rounded-lg mb-5 shadow-xl"
          />

          
        </form>
      </div>
    </>
  );
}

export default ChangePasscode;
