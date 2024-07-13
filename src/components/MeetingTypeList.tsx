"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheudleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
      <HomeCard
        className="bg-orange-500"
        iconUrl="/icons/add-meeting.svg"
        heading="New Meeting"
        description="Create new meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        className="bg-blue-500"
        iconUrl="/icons/schedule.svg"
        heading="Plan Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isScheudleMeeting")}
      />
      <HomeCard
        className=" bg-indigo-800"
        iconUrl="/icons/recordings.svg"
        heading="Recordings"
        description="View recordings"
        handleClick={() => router.push("/recordings")}
      />
      <HomeCard
        className=" bg-amber-500"
        iconUrl="/icons/join-meeting.svg"
        heading="Join meeting"
        description="Instantly join meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
    </section>
  );
};

export default MeetingTypeList;
