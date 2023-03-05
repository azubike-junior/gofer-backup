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

      {/* <div className='pt-6'>
        <tr>
          <td>Status</td>
          <td>hellll</td>
        </tr>
      </div> */}
    </div>
  )
}
