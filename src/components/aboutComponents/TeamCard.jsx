
const TeamCard = ({teamDesignation,teamImg,memberName}) => {
  return (
    <div className="flex flex-col items-center md:gap-8 gap-3">
        <div className="w-full aspect-square rounded-full overflow-hidden ">
            <img src={teamImg} alt="" className="h-full w-full object-center object-cover"/>
        </div>
        <div className="md:text-[22px] sm:text-[12px] text-[10px] text-center">
            <p>{memberName}</p>
            <p>
                {teamDesignation}
            </p>
        </div>
    </div>
  )
}

export default TeamCard