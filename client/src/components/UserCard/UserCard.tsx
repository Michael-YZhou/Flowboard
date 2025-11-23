import React from "react";
import Image from "next/image";
import type { User } from "@/store/types";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={`/images/p1.jpeg`}
          // src= "https://flowboard-s3-bucket.s3.ap-southeast-2.amazonaws.com/p1.jpeg"
          alt="profile picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
