import React from "react";

const App = () => {
  return (
    <div className="py-24">
      <div className="w-[800px] pb-5 mx-auto border-[8px] border-primary">
        <div className="flex justify-center items-center flex-col mt-3 border-b-4 border-primary">
          <img
            className="w-[150px] h-[150px] rounded-full"
            src="https://i.pinimg.com/736x/40/24/1f/40241fcf40f703776fbe3ffcca0d3bcc.jpg"
          />
          <h3 className="text-primary font-bold text-[24px] mb-2">
            <span className="italic mx-1">"Bismilllahir Rahmanir Rahim"</span>{" "}
          </h3>
        </div>
        <div className="px-6">
          <h3 className="py-3 text-center font-bold text-primary text-lg uppercase">
            Groom Details
          </h3>
          {/* <h3 className="py-2 text-center text-primary font-bold text-[24px] uppercase">groom Details</h3> */}
          <div className="relative">
            <ul>
              <li className="flex">
                <p className="w-[170px]">Name</p>
                <p className="px-4  text-center">:</p>
                <p className="">Md.Soykot</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Date of Birth</p>
                <p className="px-4 text-center">:</p>
                <p className="">28/08/1998</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Place of Birth</p>
                <p className="px-4 text-center">:</p>
                <p className="">Char Fasson, Bhola</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Religion</p>
                <p className="px-4 text-center">:</p>
                <p className="">Islam</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Height</p>
                <p className="px-4 text-center">:</p>
                <p className="">5 ft. 7 in.</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Weight</p>
                <p className="px-4 text-center">:</p>
                <p className="">58kg</p>
              </li>

              <li className="flex">
                <p className="w-[170px]">Blood Group</p>
                <p className="px-4 text-center">:</p>
                <p className="">B+</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Complexion</p>
                <p className="px-4 text-center">:</p>
                <p className="">Medium</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Merital Status</p>
                <p className="px-4 text-center">:</p>
                <p className="">Never married</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Hobbies</p>
                <p className="px-4 text-center">:</p>
                <p className="">
                  Traveling, Eating, Playing games, Watching movies, Reading
                  novels{" "}
                </p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Education</p>
                <p className="px-4 text-center">:</p>
                <p className="">
                  B.Sc. in Computer Science & Engineering (CSE)
                </p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Occupation</p>
                <p className="px-4 text-center">:</p>
                <p className="">Software Engineer(Private company)</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Present Address</p>
                <p className="px-4 text-center">:</p>
                <p className="">Manikdi Namapara, Dhaka Cantonment</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Permanent Address</p>
                <p className="px-4 text-center">:</p>
                <p className="">Char Fasson, Bhola</p>
              </li>
            </ul>
            <div className="absolute w-[200px] top-0 right-0">
              <img src="soykot-crop.jpg" className="" />
            </div>
          </div>

          <div>
            <h3 className="py-3 text-center font-bold text-primary text-lg uppercase">
              Family Details
            </h3>

            <ul>
              <li className="flex">
                <p className="w-[170px]">Father Name</p>
                <p className="px-4  text-center">:</p>
                <p className="">Abdul Mannan</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Occupation</p>
                <p className="px-4  text-center">:</p>
                <p className="">Business</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Mother Name</p>
                <p className="px-4  text-center">:</p>
                <p className="">Rekha Bibi</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Occupation</p>
                <p className="px-4  text-center">:</p>
                <p className="">Housewife</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Sister</p>
                <p className="px-4  text-center">:</p>
                <p className="">1 Umarried(Honours 2nd Year)</p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Brother</p>
                <p className="px-4  text-center">:</p>
                <p className="">No</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="py-3 text-center font-bold text-primary text-lg uppercase">
              Contact Details
            </h3>
            <ul>
              <li className="flex">
                <p className="w-[170px]">Contact No</p>
                <p className="px-4  text-center">:</p>
                <p className=""></p>
              </li>
              <li className="flex">
                <p className="w-[170px]">Gmail</p>
                <p className="px-4  text-center">:</p>
                <p className="">md.soykot2910@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
