import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/operations/authAPi";

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  if (!user) return null;

  return (
    <div className="relative">
      <button
        className="flex items-center gap-x-1 bg-khaki-100"
        onClick={() => setOpen(!open)}
      >
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </button>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-khaki-100 shadow-lg"
          ref={ref}
        >
          <div
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-cornsilk cursor-pointer"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
          <Link to="/dashboard/my-profile" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-cornsilk">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
