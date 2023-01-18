import jwt_decode from 'jwt-decode'
import { useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Navbar() {
  const [user, setUser] = useState<any>({})
  const [show, setShow] = useState<boolean>(false)
  // const  {userInfo } = useSelector((state:RootState) => state.login)

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const userDetails = localStorage.getItem('access_token')
    if (userDetails) {
      console.log(jwt_decode(userDetails))
      setUser(jwt_decode(userDetails))
    } else {
      setUser({})
    }
  }, [])

  return (
    <nav className="font-body bg-white border-b-[1.5px] border-[#d1d1d1] flex justify-between items-center py-4 pl-12 pr-9 sticky top-0 z-30 ml-[310px]">
      {/* <h1 className="text-[#222222] font-medium text-2xl">Hello, {user.preferred_username}</h1>
      
      <div className="flex items-center relative">
        <div className="flex items-center ml-[26px]">
          <Image src={profileIcon} alt="profile" />
          <div className="text-xs text-[#222222] mr-10 ml-2">
            <p>{user.ogranizationName}</p>
            <p className="text-[#707070]">{user.email}</p>
          </div>
          <MdKeyboardArrowDown className="absolute top-1 right-0" onClick={() => setShow(!show)} />
          {show ? <div className='absolute top-[62px] right-0 bg-white text-almostBlack text-center py-2 w-28 rounded-md hover:shadow-3xl cursor-pointer' onClick = {() =>dispatch(logout())}><p>Logout</p></div>: null}
        </div>
      </div> */}
    </nav>
  )
}
