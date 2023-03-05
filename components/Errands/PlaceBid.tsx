import Button from '../Button'

export default function PlaceBid() {
  return (
    <div className="w-1/2 absolute top-0 right-0 h-full bg-white px-14  p-10">
      <div className="flex justify-between border-b-[1px] pb-4">
        <div className="flex items-center">
          <img src="/close-icon.svg" alt="" className="w-3 h-3 mr-4" />
          <span className="font-semibold text-lg">Close</span>{' '}
        </div>

        <Button
          child="Place your Bid"
          className="bg-[#3F60AC] px-6 py-2 rounded-lg text-white text-sm "
          icon="/message.svg"
        />
      </div>
      <p className="text-xl font-semibold pt-6">
        I need a mechanic to fix a broken windshield
      </p>
      <div className="flex space-x-2 items-center mt-2">
        <img src="/pic-3.svg" className="w-8 h-8 rounded-full" alt="" />
        <p className="text-[#666666] font-semibold text-sm">George Eno</p>
      </div>

      <div className="pt-6 flex gap-20 ">
        <div className="space-y-5 text-sm text-[#888888] font-bold">
          <p>status</p>
          <p>Duration</p>
          <p>Location</p>
          <p>Special Requirements</p>
        </div>
        <div className="space-y-[17px] text-sm">
          <Button
            child="open"
            className="bg-[#CBD5EC] px-4 rounded-sm text-sm text-[#243763] h-6"
          />
          <div className="flex">
            <img src="/cal-icon.svg" alt="" />{' '}
            <span className="pl-2">Jan 14, 2023 - Feb 14, 2023</span>
          </div>
          <p>Sangotedo, Lagos</p>
          <div className='flex space-x-3'>
            <Button
              icon="/insurance.svg"
              child="Insurance"
              className="bg-[#F0F3FA] h-6 px-2 rounded-lg text-[#3F60AC] border-[#3F60AC] border-[1px] text-xs"
            />
            <Button
              icon="/bookmark.svg"
              child="Insurance"
              className="bg-[#E6CDFE] h-6 px-2 rounded-lg text-[#6604C8] border-[#6604C8] border-[1px] text-xs"
            />
            <Button
              icon="/insurance.svg"
              child="Insurance"
              className="bg-[#D8F8E9] h-6 px-2 rounded-lg text-[#198553] border-[#198553] border-[1px] text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
