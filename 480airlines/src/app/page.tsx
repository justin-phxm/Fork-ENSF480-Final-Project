import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-96 h-96 bg-white flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-6 py-2 bg-white justify-between items-center inline-flex">
          <div className="w-32 h-14 relative" />
          <div className="p-4 justify-start items-center gap-4 flex">
            <div className="p-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-center text-indigo-500 text-base font-normal font-['Nunito Sans']">
                Flights
              </div>
            </div>
            <div className="p-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-center text-slate-400 text-base font-normal font-['Nunito Sans']">
                Hotels
              </div>
            </div>
            <div className="p-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-center text-slate-400 text-base font-normal font-['Nunito Sans']">
                Packages
              </div>
            </div>
            <div className="p-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-center text-slate-400 text-base font-normal font-['Nunito Sans']">
                Sign in
              </div>
            </div>
            <div className="w-24 px-5 py-3 bg-indigo-500 rounded justify-start items-center gap-2 flex">
              <div className="text-neutral-50 text-base font-normal font-['Nunito Sans']">
                Sign up
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-96 pt-2 pb-40 flex-col justify-center items-center gap-12 inline-flex">
          <div className="w-96 h-64 relative">
            <div className="w-96 h-64 left-0 top-0 absolute text-center text-black text-8xl font-extrabold font-['Nunito Sans'] leading-10">
              Its more than just a trip
            </div>
            <img
              className="w-96 h-96 left-[-58px] top-[-98px] absolute"
              src="https://via.placeholder.com/872x462"
            />
          </div>
          <div className="w-96 bg-white rounded shadow border border-slate-300 justify-start items-start inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
              <div className="self-stretch px-3 py-2 bg-white rounded justify-start items-end gap-2 inline-flex">
                <div className="w-8 h-8 relative rounded">
                  <img
                    className="w-5 h-5 left-[4px] top-[6px] absolute"
                    src="https://via.placeholder.com/22x19"
                  />
                </div>
                <div className="grow shrink basis-0 h-8 text-slate-400 text-lg font-normal font-['Nunito Sans']">
                  From where?
                </div>
              </div>
            </div>
            <div className="w-px self-stretch bg-slate-300" />
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
              <div className="self-stretch px-3 py-2 bg-white rounded justify-start items-end gap-2 inline-flex">
                <div className="w-8 h-8 relative rounded">
                  <img
                    className="w-5 h-5 left-[5.15px] top-[5.32px] absolute"
                    src="https://via.placeholder.com/21x19"
                  />
                </div>
                <div className="grow shrink basis-0 h-8 text-slate-400 text-lg font-normal font-['Nunito Sans']">
                  Where to?
                </div>
              </div>
            </div>
            <div className="w-px self-stretch bg-slate-300" />
            <div className="w-64 flex-col justify-start items-center gap-1 inline-flex">
              <div className="self-stretch px-3 py-2 bg-white rounded justify-start items-end gap-2 inline-flex">
                <div className="w-8 h-8 relative rounded" />
                <div className="grow shrink basis-0 h-8 text-slate-400 text-lg font-normal font-['Nunito Sans']">
                  Depart - Return
                </div>
              </div>
            </div>
            <div className="w-px self-stretch bg-slate-300" />
            <div className="w-48 flex-col justify-start items-center gap-1 inline-flex">
              <div className="self-stretch px-3 py-2 bg-white rounded justify-start items-end gap-2 inline-flex">
                <div className="w-8 h-8 relative rounded">
                  <div className="w-2 h-2 left-[12px] top-[7px] absolute bg-slate-500 rounded-full" />
                </div>
                <div className="grow shrink basis-0 h-8 text-slate-400 text-lg font-normal font-['Nunito Sans']">
                  1 adult
                </div>
              </div>
            </div>
            <div className="w-24 px-5 py-3 bg-indigo-500 rounded justify-start items-center gap-2 flex">
              <div className="text-neutral-50 text-lg font-normal font-['Nunito Sans']">
                Search
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-96 flex-col justify-start items-center gap-10 inline-flex">
          <div className="self-stretch h-96 px-16 py-10 flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch justify-between items-start inline-flex">
              <div>
                <span className="text-slate-500 text-2xl font-bold font-['Nunito Sans']">
                  Find your next adventure with these{" "}
                </span>
                <span className="text-indigo-500 text-2xl font-bold font-['Nunito Sans']">
                  flight deals
                </span>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <div className="text-right text-slate-400 text-2xl font-normal font-['Nunito Sans']">
                  All
                </div>
                <div className="w-8 h-8 relative rounded" />
              </div>
            </div>
            <div className="self-stretch h-96 flex-col justify-start items-start gap-10 flex">
              <div className="self-stretch justify-start items-start gap-10 inline-flex">
                <div className="grow shrink basis-0 self-stretch bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="self-stretch h-96"
                    src="https://via.placeholder.com/411x397"
                  />
                  <div className="self-stretch h-20 px-6 py-4 bg-white flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0">
                        <span className="text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                          The Bund,
                        </span>
                        <span className="text-indigo-500 text-lg font-semibold font-['Nunito Sans']">
                          {" "}
                          Shanghai
                        </span>
                      </div>
                      <div className="w-16 text-right text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                        $598
                      </div>
                    </div>
                    <div className="self-stretch text-slate-400 text-base font-normal font-['Nunito Sans']">
                      China’s most international city
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="self-stretch h-96"
                    src="https://via.placeholder.com/411x397"
                  />
                  <div className="self-stretch h-20 px-6 py-4 bg-white flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0">
                        <span className="text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                          Sydney Opera House,
                        </span>
                        <span className="text-indigo-500 text-lg font-semibold font-['Nunito Sans']">
                          {" "}
                          Sydney
                        </span>
                      </div>
                      <div className="w-16 text-right text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                        $981
                      </div>
                    </div>
                    <div className="self-stretch text-slate-400 text-base font-normal font-['Nunito Sans']">
                      Take a stroll along the famous harbor
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="self-stretch h-96"
                    src="https://via.placeholder.com/411x397"
                  />
                  <div className="self-stretch h-20 px-6 py-4 bg-white flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0">
                        <span className="text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                          Kōdaiji Temple,
                        </span>
                        <span className="text-indigo-500 text-lg font-semibold font-['Nunito Sans']">
                          {" "}
                          Kyoto
                        </span>
                      </div>
                      <div className="w-16 text-right text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                        $633
                      </div>
                    </div>
                    <div className="self-stretch text-slate-400 text-base font-normal font-['Nunito Sans']">
                      Step back in time in the Gion district
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-10 inline-flex">
                <div className="grow shrink basis-0 self-stretch bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="self-stretch h-96"
                    src="https://via.placeholder.com/1312x397"
                  />
                  <div className="self-stretch h-20 px-6 py-4 bg-white flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0">
                        <span className="text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                          Tsavo East National Park,{" "}
                        </span>
                        <span className="text-indigo-500 text-lg font-semibold font-['Nunito Sans']">
                          Kenya
                        </span>
                      </div>
                      <div className="w-16 text-right text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                        $1,248
                      </div>
                    </div>
                    <div className="self-stretch text-slate-400 text-base font-normal font-['Nunito Sans']">
                      Named after the Tsavo River, and opened in April 1984,
                      Tsavo East National Park is one of the oldest parks in
                      Kenya. It is located in the semi-arid Taru Desert.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-96 px-16 py-10 flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch justify-between items-start inline-flex">
              <div>
                <span className="text-slate-500 text-2xl font-bold font-['Nunito Sans']">
                  Explore unique
                </span>
                <span className="text-emerald-300 text-2xl font-bold font-['Nunito Sans']">
                  {" "}
                  places to stay
                </span>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <div className="text-right text-slate-400 text-2xl font-normal font-['Nunito Sans']">
                  All
                </div>
                <div className="w-8 h-8 relative rounded" />
              </div>
            </div>
            <div className="self-stretch h-96 flex-col justify-start items-start gap-10 flex">
              <div className="self-stretch justify-start items-start gap-10 inline-flex">
                <div className="grow shrink basis-0 self-stretch bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="self-stretch h-96"
                    src="https://via.placeholder.com/411x397"
                  />
                  <div className="self-stretch h-32 px-6 py-4 bg-white flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0">
                        <span className="text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                          Stay among the atolls in{" "}
                        </span>
                        <span className="text-emerald-300 text-lg font-semibold font-['Nunito Sans']">
                          Maldives
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch text-slate-400 text-base font-normal font-['Nunito Sans']">
                      From the 2nd century AD, the islands were known as the
                      Money Isles due to the abundance of cowry shells, a
                      currency of the early ages.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="self-stretch h-96"
                    src="https://via.placeholder.com/411x397"
                  />
                  <div className="self-stretch px-6 py-4 bg-white flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0">
                        <span className="text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                          Experience the Ourika Valley in{" "}
                        </span>
                        <span className="text-emerald-300 text-lg font-semibold font-['Nunito Sans']">
                          Morocco
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch text-slate-400 text-base font-normal font-['Nunito Sans']">
                      Morocco’s Hispano-Moorish architecture blends influences
                      from Berber culture, Spain, and contemporary artistic
                      currents in the Middle East.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="self-stretch h-96"
                    src="https://via.placeholder.com/411x397"
                  />
                  <div className="self-stretch h-32 px-6 py-4 bg-white flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0">
                        <span className="text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                          Live traditionally in{" "}
                        </span>
                        <span className="text-emerald-300 text-lg font-semibold font-['Nunito Sans']">
                          Mongolia
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch text-slate-400 text-base font-normal font-['Nunito Sans']">
                      Traditional Mongolian yurts consists of an angled
                      latticework of wood or bamboo for walls, ribs, and a
                      wheel.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-12 px-5 py-3 bg-indigo-500 rounded justify-start items-center gap-2 inline-flex">
            <div className="text-neutral-50 text-lg font-normal font-['Nunito Sans']">
              Explore more stays
            </div>
          </div>
          <div className="self-stretch h-96 p-16 flex-col justify-start items-center gap-6 flex">
            <div className="justify-start items-start gap-96 inline-flex">
              <div>
                <span className="text-slate-500 text-2xl font-bold font-['Nunito Sans']">
                  What{" "}
                </span>
                <span className="text-indigo-500 text-2xl font-bold font-['Nunito Sans']">
                  Tripma
                </span>
                <span className="text-slate-500 text-2xl font-bold font-['Nunito Sans']">
                  {" "}
                  users are saying
                </span>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-10 inline-flex">
              <div className="grow shrink basis-0 h-72 p-4 justify-start items-start gap-4 flex">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://via.placeholder.com/48x48"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                  <div className="self-stretch h-20 flex-col justify-start items-start flex">
                    <div className="self-stretch text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                      Yifei Chen
                    </div>
                    <div className="self-stretch">
                      <span className="text-slate-500 text-lg font-normal font-['Nunito Sans']">
                        Seoul, South Korea{" "}
                      </span>
                      <span className="text-slate-400 text-lg font-normal font-['Nunito Sans']">
                        |
                      </span>
                      <span className="text-slate-500 text-lg font-normal font-['Nunito Sans']">
                        {" "}
                        April 2019
                      </span>
                    </div>
                    <div className="pt-2 justify-start items-start inline-flex">
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                    </div>
                  </div>
                  <div className="self-stretch">
                    <span className="text-slate-800 text-lg font-normal font-['Nunito Sans']">
                      What a great experience using Tripma! I booked all of my
                      flights for my gap year through Tripma and never had any
                      issues. When I had to cancel a flight because of an
                      emergency, Tripma support helped me{" "}
                    </span>
                    <span className="text-indigo-500 text-lg font-normal font-['Nunito Sans']">
                      read more...
                    </span>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-72 p-4 justify-start items-start gap-4 flex">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://via.placeholder.com/48x48"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                  <div className="self-stretch h-20 flex-col justify-start items-start flex">
                    <div className="self-stretch text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                      Kaori Yamaguchi
                    </div>
                    <div className="self-stretch">
                      <span className="text-slate-500 text-lg font-normal font-['Nunito Sans']">
                        Honolulu, Hawaii{" "}
                      </span>
                      <span className="text-slate-400 text-lg font-normal font-['Nunito Sans']">
                        |
                      </span>
                      <span className="text-slate-500 text-lg font-normal font-['Nunito Sans']">
                        {" "}
                        February 2017
                      </span>
                    </div>
                    <div className="pt-2 justify-start items-start inline-flex">
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                    </div>
                  </div>
                  <div className="self-stretch">
                    <span className="text-slate-800 text-lg font-normal font-['Nunito Sans']">
                      My family and I visit Hawaii every year, and we usually
                      book our flights using other services. Tripma was
                      recommened to us by a long time friend, and I’m so glad we
                      tried it out! The process was easy and{" "}
                    </span>
                    <span className="text-indigo-500 text-lg font-normal font-['Nunito Sans']">
                      read more...
                    </span>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-72 p-4 justify-start items-start gap-4 flex">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://via.placeholder.com/48x48"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                  <div className="self-stretch h-20 flex-col justify-start items-start flex">
                    <div className="self-stretch text-slate-500 text-lg font-semibold font-['Nunito Sans']">
                      Anthony Lewis
                    </div>
                    <div className="self-stretch">
                      <span className="text-slate-500 text-lg font-normal font-['Nunito Sans']">
                        Berlin, Germany{" "}
                      </span>
                      <span className="text-slate-400 text-lg font-normal font-['Nunito Sans']">
                        |
                      </span>
                      <span className="text-slate-500 text-lg font-normal font-['Nunito Sans']">
                        {" "}
                        April 2019
                      </span>
                    </div>
                    <div className="pt-2 justify-start items-start inline-flex">
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                      <div className="w-6 h-6 relative rounded" />
                    </div>
                  </div>
                  <div className="self-stretch">
                    <span className="text-slate-800 text-lg font-normal font-['Nunito Sans']">
                      When I was looking to book my flight to Berlin from LAX,
                      Tripma had the best browsing experiece so I figured I’d
                      give it a try. It was my first time using Tripma, but I’d
                      definitely recommend it to a friend and use it for{" "}
                    </span>
                    <span className="text-indigo-500 text-lg font-normal font-['Nunito Sans']">
                      read more...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-96 py-4 bg-white flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch px-28 pt-14 pb-6 justify-between items-start inline-flex">
              <div className="w-32 h-14 relative" />
              <div className="w-48 pr-4 py-4 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-500 text-lg font-bold font-['Nunito Sans']">
                    About
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    About Tripma
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    How it works
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Careers
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Press
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Blog
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Forum
                  </div>
                </div>
              </div>
              <div className="w-56 pr-4 py-4 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-500 text-lg font-bold font-['Nunito Sans']">
                    Partner with us
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Partnership programs
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Affiliate program
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Connectivity partners
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Promotions and events
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Integrations
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Community
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Loyalty program
                  </div>
                </div>
              </div>
              <div className="w-48 pr-4 py-4 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-500 text-lg font-bold font-['Nunito Sans']">
                    Support
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Help Center
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Contact us
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Privacy policy
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Terms of service
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Trust and safety
                  </div>
                </div>
                <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                    Accessibility
                  </div>
                </div>
              </div>
              <div className="w-48 flex-col justify-start items-start gap-3 inline-flex">
                <div className="h-44 pr-4 py-4 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-slate-500 text-lg font-bold font-['Nunito Sans']">
                      Get the app
                    </div>
                  </div>
                  <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                      Tripma for Android
                    </div>
                  </div>
                  <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                      Tripma for iOS
                    </div>
                  </div>
                  <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-['Nunito Sans']">
                      Mobile site
                    </div>
                  </div>
                </div>
                <div className="w-32 h-10 relative bg-black rounded border border-neutral-400">
                  <div className="w-7 h-7 left-[8px] top-[4px] absolute rounded" />
                </div>
                <div className="w-32 h-10 justify-center items-center inline-flex">
                  <img
                    className="w-32 h-10"
                    src="https://via.placeholder.com/135x40"
                  />
                </div>
              </div>
            </div>
            <div className="w-96 h-px bg-white justify-center items-center inline-flex" />
            <div className="self-stretch h-16 px-28 py-3 justify-between items-center inline-flex">
              <div className="p-2 justify-start items-start gap-5 flex">
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative">
                  <img
                    className="w-5 h-5 left-[1.25px] top-[1.25px] absolute"
                    src="https://via.placeholder.com/21x21"
                  />
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="text-right text-slate-400 text-lg font-normal font-['Nunito Sans']">
                © 2020 Tripma incorporated
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
