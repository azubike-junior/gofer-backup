import Button from '../../components/Button'
import ErrandCard from '../../components/Errands/ErrandCard'
import PlaceBid from '../../components/Errands/PlaceBid'

export default function Errands() {
  console.log(">>>>>djdjd")
  return (
    <div>
      <div className="bg-[#F0F3FA] w-full h-72 ">
        <div className="flex justify-center">
          <div className="bg-white px-4 py-2 w-[65%] h-14 flex mt-16 rounded-lg">
            <img src="/search-icon.svg" className=" h-8 mt-2" alt="" />
            <input
              type="text"
              className=" bg-transparent outline-none flex-1 px-2"
            />
          </div>
        </div>

        <div className=" pt-12 flex justify-center gap-40">
          <Button
            child="All Errands"
            className="bg-[#A5B6DE] text-white px-4 py-3 rounded-lg w-40"
          />
          <Button
            child="Requires Insurance"
            className=" text-black px-4 py-3 rounded-lg"
          />{' '}
          <Button
            child="Requires Qualifications"
            className=" text-black px-4 py-3 rounded-lg"
          />{' '}
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 mb-20">
        <div className="">
          <div className="container">
            <ErrandCard ins img />
            <ErrandCard />
            <ErrandCard ins />
            <ErrandCard ins />

            <ErrandCard ins />
            <ErrandCard ins />
            <ErrandCard ins img />
            <ErrandCard ins />

            <ErrandCard ins />
            <ErrandCard />
            <ErrandCard ins img />

            <ErrandCard ins />
            <ErrandCard ins />
            <ErrandCard ins img />
            <ErrandCard ins />

            <ErrandCard ins />
            <ErrandCard ins />
            <ErrandCard ins img />
            <ErrandCard ins />
          </div>
        </div>
      </div>


      <PlaceBid/>
    </div>
  )
}
