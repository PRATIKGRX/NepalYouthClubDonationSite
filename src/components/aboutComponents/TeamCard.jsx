
const TeamCard = ({teamDesignation,teamImg,memberName}) => {
  return (
    <div className="flex flex-col items-center gap-8">
        <div className="w-full aspect-square rounded-full overflow-hidden bg-red-400">
            <img src={teamImg} alt="" className="h-full w-full object-center object-cover"/>
        </div>
        <div className="text-[22px] text-center">
            <p>{memberName}</p>
            <p>
                {teamDesignation}
            </p>
        </div>
    </div>
  )
}

export default TeamCard