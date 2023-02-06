import { useRouter } from 'next/router'
import Button from '../components/Button'

export default function profile() {
  const router = useRouter()
  return (
    <div className="bg-white h-full font-inter">
      <div className="bg-[#243763] h-24"></div>
      <div className="banner h-[250px] z-5"></div>
      <div className="flex z-20 w-full justify-center items-center px-40 pb-40">
        <div className="">
          <div className="flex -mt-10 space-x-8">
            <div className="w-52 h-52 border-[6px] border-white rounded-full shadow-lg"></div>
            <div className="mt-16 flex justify-between space-x-96">
              <div className="">
                <h1 className="font-inter text-3xl  text-[#011E3E] font-bold">
                  Zebrudaya Owonikoko Niggaregbe{' '}
                </h1>
                <div className="flex text-[#011E3E] space-x-5 pt-2 text-sm">
                  <p className="font-inter font-semibold">Data Scientist </p>
                  <div className="flex space-x-2">
                    <div className="flex space-x-2 ">
                      <img src="./star.svg" className="w-3" alt="" />
                      <img src="./star.svg" className="w-3" alt="" />
                      <img src="./star.svg" className="w-3" alt="" />
                      <img src="./star.svg" className="w-3" alt="" />
                      <img src="./star.svg" className="w-3" alt="" />
                    </div>
                    <p className="text-[#011E3E]">
                      4.5 <span className="text-[#6D6D6D]">(134 reviews)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  onClick={() => {
                    localStorage.clear()
                    router.push("/")
                  }}
                  child="Edit Profile"
                  className="bg-[#F0F3FA] text-black rounded-lg border-[#A5B6DE] py-2.5 w-40 border-1 text-xs "
                />
              </div>
            </div>
          </div>

          <div className="flex w-full border-b-1 border-[#DEDEDE] space-x-4 pt-14 text-base pb-4">
            <Button
              child="Personal Information"
              className="bg-[#CBD5EC] text-[#314B87] font-semibold rounded-sm px-4 py-1 h-10"
            />
            <Button
              child="Profile Verification"
              className=" text-[#333333] font-semibold px-4 py-1"
            />
          </div>

          <div className="pt-14 space-y-8">
            <div>
              <p className="text-sm text-[#6D6D6D] font-semibold">
                Description
              </p>
              <p className="text-lg text-[#011E3E]">
                Lorem ipsum dolor sit amet consectetur. Egestas etiam lectus
                sapien eget. Eget massa consectetur senectus mi aliquet. In
                nulla mattis sollicitudin placerat. Rhoncus bibendum non
                suspendisse praesent diam a maecenas et. Eget neque platea ut
                enim. Faucibus magnis ut aliquet quis. Tellus commodo felis duis
                pretium et mauris et aliquet.
              </p>
            </div>
            <div>
              <p className="text-sm text-[#6D6D6D] font-semibold">
                Email Address
              </p>
              <p className="text-lg text-[#011E3E]">
                jekodunmiebrudayakinfemi@gmail.com
              </p>
            </div>
            <div>
              <p className="text-sm text-[#6D6D6D] font-semibold">
                Phone Number
              </p>
              <p className="text-lg text-[#011E3E]">+1 293 0914 910</p>
            </div>
            <div>
              <p className="text-sm text-[#6D6D6D] font-semibold">
                Date of Birth
              </p>
              <p className="text-lg text-[#011E3E]">17th August 1991</p>
            </div>
            <div>
              <p className="text-sm text-[#6D6D6D] font-semibold">
                Total Errands
              </p>
              <p className="text-lg text-[#011E3E]">300</p>
            </div>
            <div>
              <p className="text-sm text-[#6D6D6D] font-semibold">
               Total Errands Completed
              </p>
              <p className="text-lg text-[#011E3E]">300</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
