import React from "react";

interface MeetingProps {
  params: {
    id: string;
  };
}

const Meeting = ({ params }: MeetingProps) => {
  return <div>Meeting</div>;
};

export default Meeting;
